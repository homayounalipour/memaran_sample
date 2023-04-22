import { Modal } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TProduct } from "../webServices/products";

export type ProductDetailModalProps = {
  onSubmit?: () => void;
  onclose?: () => void;
  onAddToCard?: () => void;
  visible: boolean;
  product: TProduct;
};

export function ProductDetailModal(props: ProductDetailModalProps) {
  const { onclose, visible, product, onAddToCard, onSubmit } = props;

  return (
    <Modal
      open={visible}
      onClose={onclose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999999,
      }}
    >
      <div className=" bg-white rounded-lg w-[70vw] flex justify-center flex-col ">
        <div className="border w-[70vw] bg-[#E4E4E4] h-[9vh] items-center px-28 flex flex-row justify-between rounded-t-lg">
          <span className="font-medium leading-5 text-base rounded-t-md flex flex  items-center">
            Product Detail
          </span>
          <Rating
            name="custom-no-value"
            value={+product.rating.rate}
          />
        </div>
        <div className="flex flex-row px-24 py-16">
          <div className="pr-4">
            <img
              src={product?.image}
              alt={product?.image}
              style={{ width: 356, height: 257 }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-base leading-5 pb-5 pt-1">
              {product?.title}
            </span>
            <span className="font-normal text-[#737373] text-xs w-[15vw] leading-4 pb-2">
              {product?.description}
            </span>

            <div className="flex flex-row gap-36 items-center mt-auto">
              <span className="text-base font-medium leading-5">
                ${product?.price}
              </span>
              <button
                onClick={onSubmit}
                type="submit"
                className="flex flex-row justify-center items-center bg-[#6F11E1] w-[165px] h-[43px] rounded gap-2 text-white"
              >
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
