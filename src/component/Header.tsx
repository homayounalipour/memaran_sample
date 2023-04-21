import { LogoApp } from "./LogoApp";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { useGetCategories } from "../store/modules/product/getCategories";
import { useEffect } from "react";
import { useLocationQuery } from "../hooks/useLocationQuery";
import { TCategories } from "../webServices/categories";

export function Header() {
  const { categories, dispatchGetCategories } = useGetCategories();

  const { query } = useLocationQuery<{ category: TCategories }>();

  useEffect(() => {
    dispatchGetCategories();
  }, []);

  return (
    <div className="flex flex-row justify-around items-center p-4 shadow-sm ">
      <div className="flex flex-row justify-center items-center">
        <LogoApp />
      </div>
      <div className="flex justify-center gap-14 items-center">
        {categories?.length
          ? categories?.map((category, index) => (
              <Link key={index} to={`/home?category=${category}`}>
                <span
                  className={`font-medium leading-5 text-base hover:border-b-4 hover:border-b-[#6F11E1] pb-6
                   ${
                     query?.category &&
                     query?.category === category &&
                     "border-b border-b-4 border-b-[#6F11E1]"
                   }`}
                >
                  {category}
                </span>
              </Link>
            ))
          : null}
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
