import { Modal } from "@mui/material";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { shoe } from "../assets/images";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AddProductForm } from "../validators/addProduct";

export type ProductDetailModalProps = {
  onSubmit?: () => void;
  onclose?: () => void;
};

export function ProductDetailModal(
  props: AddProductForm & ProductDetailModalProps
) {
  const { Description, ImageUrl, Title, Price, onSubmit, onclose } = props;

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
      <div className=" bg-white rounded-lg w-[70vw] flex justify-center flex-col ">
        <div className="border w-[70vw] bg-[#E4E4E4] h-[9vh] items-center px-28 flex flex-row justify-between">
          <span className="font-medium leading-5 text-base rounded-t-md flex flex  items-center">
            Product Detail
          </span>
          <Rating
            name="custom-no-value"
            defaultValue={1}
            precision={1}
            value={1}
          />
        </div>
        <div className="flex flex-row px-24 py-16">
          <div className="pr-4">
            <img src={ImageUrl} alt={ImageUrl} width="356px" height="257px" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-base leading-5 pb-5 pt-1">
              {Title}
            </span>
            <span className="font-normal text-xs w-[15vw] leading-4 pb-2">
              {Description}
            </span>
            <span className="font-normal text-xs w-[15vw] leading-4 pb-16">
              {Description}
            </span>
            <div className="flex flex-row gap-36 items-center">
              <span className="text-base font-medium leading-5">{Price}</span>
              <button className="flex flex-row justify-center items-center bg-[#6F11E1] w-[165px] h-[43px] rounded gap-2 text-white">
                <Badge color="warning">
                  <HiOutlineShoppingBag
                    color="white"
                    fontSize={38}
                    className="bg-[#6F11E1] rounded p-1.5"
                  />
                </Badge>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
