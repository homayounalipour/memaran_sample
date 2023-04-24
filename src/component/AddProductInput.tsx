import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AddProductForm, addProductYup } from "../validators/addProduct";
import { ConfirmationModal } from "./ConfirmationModal";
import { useMediaQuery } from "../hooks/mediaQueryHooks";

export type AddProductInputProps = {
  onAddProduct: (data: any) => void;
  visible?: boolean;
  handleCloseModal: () => void;
};

export function AddProductInput(props: AddProductInputProps) {
  const { onAddProduct, visible, handleCloseModal } = props;

  const isMd = useMediaQuery("(max-width:768px)");

  const { control, handleSubmit } = useForm<AddProductForm>({
    defaultValues: {
      id: "",
      title: "",
      description: "",
      category: "",
      image: "",
      price: "",
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver: addProductYup(),
  });

  return (
    <>
      <ConfirmationModal
        addProduct
        visible={!visible}
        onclose={handleCloseModal}
      />
      <div className="lg:px-20 py-9">
        <form className="flex flex-col gap-5  md:justify-center md:items-center">
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="title"
                    label="title"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: isMd ? "264px" : 358 }}
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
            name="description"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="description"
                    label="description"
                    multiline
                    rows={2}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: isMd ? "264px" : 358 }}
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
            name="category"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="category"
                    label="category"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: isMd ? "264px" : 358 }}
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
            name="image"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="image"
                    label="image"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: isMd ? "264px" : 358 }}
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
            name="price"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="price"
                    label="price"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: isMd ? "264px" : 358 }}
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
          <div className="flex m-auto gap-4 max-sm:gap-1.5">
            <button
              onClick={(e) => e.preventDefault()}
              className="border  border-[#FE5B3A] text-[#FE5B3A] lg:w-[171px] md:h-[43px] md:w-[130px] max-sm:w-[130px] max-sm:h-[43px]
            leading-5 text-base font-normal rounded-md "
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit(onAddProduct)}
              type="submit"
              className="bg-[#FE5B3A] rounded-md  leading-5 text-base font-normal text-white
               max-sm:w-[130px] max-sm:h-[43px] lg:w-[171px] md:h-[43px] md:w-[130px]"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
