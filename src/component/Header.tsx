import { LogoApp } from "./LogoApp";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Badge from "@mui/material/Badge";

export function Header() {
  return (
    <div className="flex flex-row justify-around items-center p-4 shadow-sm ">
      <div className="flex flex-row justify-center items-center">
        <LogoApp />
      </div>
      <div className="flex justify-center gap-14 items-center">
        <Link to="/electronic">
          <a className=" font-medium leading-5 text-base hover:border-b-4 hover:border-b-[#6F11E1] hover:pb-6">
            electronic
          </a>
        </Link>
        <Link to="/electronic">
          <a className=" font-medium leading-5 text-base hover:border-b-4 hover:border-b-[#6F11E1] hover:pb-6">
            women
          </a>
        </Link>
        <Link to="/electronic">
          <a className=" font-medium leading-5 text-base hover:border-b-4 hover:border-b-[#6F11E1] hover:pb-6">
            men
          </a>
        </Link>
        <Link to="/electronic">
          <a className=" font-medium leading-5 text-base hover:border-b-4 hover:border-b-[#6F11E1] hover:pb-6">
            jewelry
          </a>
        </Link>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <button>
          <Badge
            color="warning"
            badgeContent={1}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <HiOutlineShoppingBag
              color="white"
              fontSize={43}
              className="bg-[#6F11E1] rounded p-1.5"
            />
          </Badge>
        </button>
        <button className="flex flex-row justify-center items-center bg-[#6F11E1] w-[165px] h-[43px] rounded gap-2 text-white">
          <AiOutlinePlusCircle fontSize={30} color="white" />
          Add product
        </button>
      </div>
    </div>
  );
}
