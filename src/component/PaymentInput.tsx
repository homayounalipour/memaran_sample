import TextField from "@mui/material/TextField";
import { ConfirmationModal } from "./ConfirmationModal";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { PaymentForm, PaymentYup } from "../validators/payment";
import { useMediaQuery } from "../hooks/mediaQueryHooks";

export function PaymentInput() {
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
  const isSm = useMediaQuery("(max-width:768px)");

  return (
    <>
      <ConfirmationModal
        payment
        visible={!showModal}
        onclose={handleCloseModal}
      />

      <div className="xl:px-20  py-9  md:px-4 ">
        <form
          onSubmit={handleSubmit(handleCheckOutPayment)}
          className="flex flex-col gap-5  max-sm:items-center"
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
                    type="number"
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
                    style={{ width: isSm ? "264px" : 358, paddingBottom: 15 }}
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
            name="cvv2"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="cvv2"
                    label="cvv2"
                    type="number"
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
                    style={{ width: isSm ? "264px" : 358, paddingBottom: 15 }}
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
          <div className="md:flex md:gap-4 max-sm:px-5">
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
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputMode="numeric"
                      style={{ width: isSm ? "264px" : 170, paddingBottom: 15 }}
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
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputMode="numeric"
                      style={{ width: isSm ? "264px" : 170, paddingBottom: 15 }}
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
          </div>
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
                    type="number"
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
                    style={{ width: isSm ? "264px" : 358, paddingBottom: 15 }}
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
          <div className="flex pt-2 gap-4 max-sm:gap-1.5">
            <button
              className="border  border-[#FE5B3A] text-[#FE5B3A] w-[171px] h-[43px] leading-5 text-base font-normal rounded-md
             lg:w-[171px] md:h-[43px] md:w-[130px] max-sm:w-[130px] max-sm:h-[43px] "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#FE5B3A] rounded-md w-[171px] h-[43px] leading-5 text-base font-normal text-white
               max-sm:w-[130px] max-sm:h-[43px] lg:w-[171px] md:h-[43px] md:w-[130px]"
            >
              Check Out
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
