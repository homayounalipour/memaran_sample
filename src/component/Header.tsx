import { LogoApp } from "./LogoApp";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { useGetCategories } from "../store/modules/product/getCategories";
import { useCallback, useEffect } from "react";
import { useLocationQuery } from "../hooks/useLocationQuery";
import { TCategories } from "../webServices/categories";
import { useCart } from "../store/modules/cart/cart";

export function Header() {
  const { categories, dispatchGetCategories } = useGetCategories();
  const { cart, totalPrice } = useCart();

  const { query } = useLocationQuery<{ category: TCategories }>();

  const navigate = useNavigate();


  useEffect(() => {
    dispatchGetCategories();
  }, []);

  const handleNavigateShoppingCard = useCallback(() => {
    navigate("/cart");
  }, []);
  const handleNavigateAddProduct = useCallback(() => {
    navigate("/add-product");
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
        <button type="button" onClick={handleNavigateShoppingCard}>
          <Badge
            color="warning"
            badgeContent={cart.length}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            invisible={!cart.length}
          >
            <HiOutlineShoppingBag
              color="white"
              fontSize={43}
              className="bg-[#6F11E1] rounded p-1.5"
            />
          </Badge>
        </button>
        <button
          type="button"
          onClick={handleNavigateAddProduct}
          className="flex flex-row justify-center items-center bg-[#6F11E1] w-[165px] h-[43px] rounded gap-2 text-white"
        >
          <AiOutlinePlusCircle fontSize={30} color="white" />
          Add product
        </button>
      </div>
    </div>
  );
}
