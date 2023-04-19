import { Modal } from "@mui/material";
import { useState } from "react";
import { AddProductForm } from "../validators/addProduct";
import { AiFillCheckCircle } from "react-icons/ai";
import { Hr } from "../kit/Hr";

export type AddProductModalProps = {
  onclose?: () => void;
  onAdd?: () => void;
  addProduct?: boolean;
  payment?: boolean;
  visible?: boolean;
};

export function ConfirmationModal(
  props: AddProductForm & AddProductModalProps
) {
  const {
    Description,
    ImageUrl,
    Category,
    Title,
    Price,
    onclose,
    addProduct,
    payment,
    onAdd,
    visible,
  } = props;
  return (
    <Modal
      open={!visible}
      onClose={onclose}
      onClick={onAdd}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999999,
      }}
    >
      <div
        className="rounded-md w-[34vw] flex justify-center flex-col pt-3"
        style={{
          background: payment ? "#E8FFE4" : "white",
        }}
      >
        {addProduct ? (
          <div className="flex justify-center flex-col items-center">
            <AiFillCheckCircle color="#1BAC03" size={24} />
            <span className="font-medium leading-6 text-xl pb-7 ">
              Your product has been successfully registered
            </span>
          </div>
        ) : (
          <div className="flex justify-center py-4 flex-col items-center">
            <AiFillCheckCircle color="#1BAC03" size={24} />
            <span className="font-medium text-[#1BAC03] leading-6 text-xl pb-7 pt-5 ">
              your payment is successful
            </span>
          </div>
        )}
        <Hr />
        {addProduct && (
          <div className="flex flex-row px-7 py-8">
            <div className="pr-4">
              <img src={ImageUrl} alt={ImageUrl} width="132px" height="95px" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-base leading-5 pb-5">
                {Title}
              </span>
              <span className="font-normal text-xs w-[18vw] leading-4 pb-2">
                {Description}
              </span>
              <span className="text-xs font-medium leading-4 pb-5">
                {Category}
              </span>
              <span className="text-base font-medium leading-5">{Price}</span>
            </div>
          </div>
        )}
        {payment && (
          <div>
            <div className="flex justify-center m-auto bg-[#E8FFE4] flex-col  gap-12 pt-8">
              <div className="flex justify-around">
                <span className="leading-5 text-base font-bold">
                  Total Amount:
                </span>
                <span className="leading-5 text-base font-medium">$1.620</span>
              </div>
              <div className="flex justify-evenly gap-4">
                <span className="leading-5 text-base font-bold">
                  card number:
                </span>
                <span className="leading-5 text-base font-medium">
                  1234.5687.****.****
                </span>
              </div>
              <div className="flex justify-evenly gap-12">
                <span className="leading-5 text-base font-bold">
                  Tracking Code:
                </span>
                <span className="leading-5 text-base font-medium">
                  12345678978
                </span>
              </div>
              <div className="flex justify-center pb-12 ">
                <button className="bg-[#1BAC03] rounded-md px-4 py-2 leading-5 text-base font-normal text-white">
                  Complete transaction
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
