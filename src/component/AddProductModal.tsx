import { Modal } from "@mui/material";
import { useState } from "react";
import { AddProductForm } from "../validators/addProduct";
import { AiFillCheckCircle } from "react-icons/ai";
import { Hr } from "../kit/Hr";

export type AddProductModalProps = {
  onclose?: () => void;
};

export function AddProductModal(props: AddProductForm & AddProductModalProps) {
  const { Description, ImageUrl, Category, Title, Price, onclose } = props;
  const [open, setOpen] = useState(false);
  return (
    <Modal
      open={open}
      onClose={onclose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999999,
      }}
    >
      <div className=" bg-white rounded-md w-[34vw] flex justify-center flex-col pt-3">
        <div className="flex justify-center flex-col items-center">
          <AiFillCheckCircle color="#1BAC03" size={24} />
          <span className="font-medium leading-6 text-xl pb-7 ">
            Your product has been successfully registered
          </span>
        </div>
        <Hr />
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
      </div>
    </Modal>
  );
}
