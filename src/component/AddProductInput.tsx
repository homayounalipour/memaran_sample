import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AddProductForm, addProductYup } from "../validators/addProduct";
import { ConfirmationModal } from "./ConfirmationModal";
import { useCart } from "../store/modules/cart/cart";
import {useEffect} from "react";

export function AddProductInput() {

  const { control, handleSubmit } = useForm<AddProductForm>({
    defaultValues: {
      Title: "",
      Description: "",
      Category: "",
      ImageUrl: "",
      Price: "",
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver: addProductYup(),
  });



  return (
    <>
      <ConfirmationModal addProduct visible={true} />
      <div className="px-20 py-9">
        <div className="flex flex-col gap-5">
          <Controller
            name="Title"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="Title"
                    label="Title"
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
            name="Description"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="Description"
                    label="Description"
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
            name="Category"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="Category"
                    label="Category"
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
            name="ImageUrl"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="ImageUrl"
                    label="ImageUrl"
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
            name="Price"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <>
                  <TextField
                    {...field}
                    id="Price"
                    label="Price"
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
            <button className="bg-[#FE5B3A] rounded-md w-[171px] h-[43px] leading-5 text-base font-normal text-white">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
