import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AddProductForm, addProductYup } from "../validators/addProduct";
import { ConfirmationModal } from "./ConfirmationModal";
import { useCallback, useState } from "react";

export type AddProductInputProps = {
  onAddProduct: (data: any) => void;
  visible?: boolean;
  handleCloseModal: () => void;
};

export function AddProductInput(props: AddProductInputProps) {
  const { onAddProduct, visible, handleCloseModal } = props;

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
      <div className="px-20 py-9">
        <form
          onSubmit={handleSubmit(onAddProduct)}
          className="flex flex-col gap-5"
        >
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
                    style={{ width: 358 }}
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
                    style={{ width: 358 }}
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
                    style={{ width: 358 }}
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
                    style={{ width: 358 }}
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
                    style={{ width: 358 }}
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
          <div className="flex m-auto gap-4">
            <button className="border  border-[#FE5B3A] text-[#FE5B3A] w-[171px] h-[43px] leading-5 text-base font-normal rounded-md ">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#FE5B3A] rounded-md w-[171px] h-[43px] leading-5 text-base font-normal text-white"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
