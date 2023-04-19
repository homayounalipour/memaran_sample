import { LayOut } from "../kit/LayOut";
import { shoe } from "../assets/images";
import { AddProductForm } from "../validators/addProduct";
import { HiMinusCircle } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import { CheckBox } from "../kit/CheckBox";
import { Hr } from "../kit/Hr";
import { ShoppingCardTab } from "../component/shoppingCardTab";

const x = [
  {
    id: 1,
    image: { shoe },
    Category: "clothes",
    title: "Nike Triple Black Air Force 1 '07 sneakers",
    description:
      "A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.",
    price: "$1.620",
  },
];

export function ShoppingCard(props: AddProductForm) {
  const { ImageUrl, Title, Price, total } = props;

  return (
    <LayOut>
      <div className="px-36 pt-8">
        <span className="font-medium text-base leading-5">Shopping Cart</span>
      </div>
      <div>
        <div className="grid grid-cols-3  px-36 pt-8 gap-2 ">
          <div className="col-span-2 rounded-lg h-[40vh] shadow-lg">
            <div
              className=" border bg-[#E4E4E4]  h-[9vh] rounded-t-md flex justify-between items-center px-16
          font-medium leading-5 text-base"
            >
              <span>Product details</span>
              <span>Name</span>
              <span>price</span>
              <span>Total</span>
            </div>
            <div className="px-14 pt-8 flex justify-between items-center">
              <img src={shoe} alt={shoe} width="132px" height="95px" />
              <span className="w-[10vw] font-medium leading-5 text-base">
                Nike Triple Black Air Force 1 '07 sneakers
              </span>
              <span className="w-[7vw] font-medium leading-5 text-base">
                $1.620
              </span>
              <span className=" font-medium leading-5 text-base">$1.620</span>
            </div>
            <div className="flex pt-8 pb-4 px-14 items-center gap-1">
              <HiMinusCircle color="#FD6644" size={28} />
              <TextField
                id="count"
                size="small"
                InputLabelProps={{
                  shrink: false,
                  htmlFor: "count",
                }}
                style={{ width: 70 }}
              />
              <BsFillPlusCircleFill size={24} color="#FD6644" />
            </div>
          </div>
          <ShoppingCardTab />
        </div>
      </div>
    </LayOut>
  );
}
