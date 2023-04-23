import { AiOutlineMenu } from "react-icons/ai";
import { mobileIcon } from "../assets/images";
import Badge from "@mui/material/Badge";
import { HiOutlineShoppingBag } from "react-icons/hi";
import React, { useCallback } from "react";
import { useCart } from "../store/modules/cart/cart";
import { Link, useNavigate } from "react-router-dom";

export function MobileHeader() {
  const { cart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleNavigateShoppingCard = useCallback(() => {
    navigate("/cart");
  }, []);
  return (
    <div className="md:hidden sticky top-0 left-0 right-0 z-50 [360px] h-[64px] bg-blue-700 flex justify-between items-center px-6">
      <div>
        <AiOutlineMenu size={28} color="white" />
      </div>
      <Link to="/home">
        <div className="flex gap-2">
          <img src={mobileIcon} alt="mobileIcon" width="20px" height="6px" />
          <div className="flex">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-white flex justify-center items-center pt-1">
              ECO
            </span>
            <p className="text-xl bg-clip-text text-transparent bg-gray-300 flex justify-center items-center pt-1">
              shop
            </p>
          </div>
        </div>
      </Link>
      <div>
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
              fontSize={38}
              className="rounded p-1.5"
            />
          </Badge>
        </button>
      </div>
    </div>
  );
}
