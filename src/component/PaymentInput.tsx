import TextField from "@mui/material/TextField";
import { ConfirmationModal } from "./ConfirmationModal";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AddProductForm, addProductYup } from "../validators/addProduct";
import { PaymentForm, PaymentYup } from "../validators/payment";
import { useCart } from "../store/modules/cart/cart";

export type PaymentProps = {
  onAddProduct?: (data: any) => void;
  visible?: boolean;
  handleCloseModal?: () => void;
  handleCheckOutPayment?: () => void;
};

export function PaymentInput(props: PaymentProps) {
  const { visible } = props;

  const [showModal, setShowModal] = useState(false);

  const { control, handleSubmit } = useForm<PaymentForm>({
    defaultValues: {
      month: "",
      year: "",
      cardNumber: "",
      cvv2: "",
      ePass: "",
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver: PaymentYup(),
  });

  const handleCheckOutPayment = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <ConfirmationModal
        payment
        visible={!showModal}
        onclose={handleCloseModal}
      />

      <div className="px-20 py-9">
        <form
          onSubmit={handleSubmit(handleCheckOutPayment)}
          className="flex flex-col gap-5"
        >
          <Controller
            name="cardNumber"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="cardNumber"
                    label="Card Number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder="1234-4567-8900-0000"
                    inputProps={{
                      style: {
                        // background: "red",
                        marginLeft: 80,
                        marginRight: 50,
                      },
                    }}
                    inputMode="numeric"
                    style={{ width: 358, paddingBottom: 15 }}
                  />
                  {/*<input*/}
                  {/*  type="tel"*/}
                  {/*  style={{ width: 358, paddingBottom: 15 }}*/}
                  {/*  inputMode="numeric"*/}
                  {/*  pattern="[0-9\s]{13,19}"*/}
                  {/*  autoComplete="cc-number"*/}
                  {/*  maxLength={19}*/}
                  {/*  placeholder="xxxx xxxx xxxx xxxx"*/}
                  {/*/>*/}
                  {fieldState.isTouched && fieldState?.error?.message ? (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      {fieldState.error.message}
                    </p>
                  ) : null}
                </>
              );
            }}
          />
          <Controller
            name="cvv2"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="cvv2"
                    label="cvv2"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      style: {
                        // background: "red",
                        marginLeft: 80,
                        marginRight: 50,
                      },
                    }}
                    inputMode="numeric"
                    style={{ width: 358, paddingBottom: 15 }}
                  />
                  {fieldState.isTouched && fieldState?.error?.message ? (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      {fieldState.error.message}
                    </p>
                  ) : null}
                </>
              );
            }}
          />
          <Controller
            name="year"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="year"
                    label="year"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      style: {
                        // background: "red",
                        marginLeft: 80,
                        marginRight: 50,
                      },
                    }}
                    inputMode="numeric"
                    style={{ width: 358, paddingBottom: 15 }}
                  />
                  {fieldState.isTouched && fieldState?.error?.message ? (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      {fieldState.error.message}
                    </p>
                  ) : null}
                </>
              );
            }}
          />
          <Controller
            name="month"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="month"
                    label="month"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      style: {
                        // background: "red",
                        marginLeft: 80,
                        marginRight: 50,
                      },
                    }}
                    inputMode="numeric"
                    style={{ width: 358, paddingBottom: 15 }}
                  />
                  {fieldState.isTouched && fieldState?.error?.message ? (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      {fieldState.error.message}
                    </p>
                  ) : null}
                </>
              );
            }}
          />
          <Controller
            name="ePass"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="ePass"
                    label="E-pass"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      style: {
                        // background: "red",
                        marginLeft: 80,
                        marginRight: 50,
                      },
                    }}
                    inputMode="numeric"
                    style={{ width: 358, paddingBottom: 15 }}
                  />
                  {fieldState.isTouched && fieldState?.error?.message ? (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      {fieldState.error.message}
                    </p>
                  ) : null}
                </>
              );
            }}
          />
          {/**/}
          <div className="flex pt-2 gap-4">
            <button className="border  border-[#FE5B3A] text-[#FE5B3A] w-[171px] h-[43px] leading-5 text-base font-normal rounded-md ">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#FE5B3A] rounded-md w-[171px] h-[43px] leading-5 text-base font-normal text-white"
            >
              Check Out
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
