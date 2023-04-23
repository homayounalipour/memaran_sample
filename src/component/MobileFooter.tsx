import { AiFillPlusCircle } from "react-icons/ai";
import { CgHomeAlt } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import { useMediaQuery } from "../hooks/mediaQueryHooks";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function MobileFooter() {
  const isXs = useMediaQuery("(max-width:320px)");

  const navigate = useNavigate();

  const handleNavigateAddProduct = useCallback(() => {
    navigate("/add-product");
  }, []);
  const handleNavigateHome = useCallback(() => {
    navigate("/home");
  }, []);

  return (
    <div className="flex fixed bg-[#F2F4FF] border w-full h-[62px] bottom-0 ">
      <div
        className={`absolute ${isXs ? "-top-5" : "-top-5"}  ${
          isXs ? "right-36" : "left-44"
        }`}
      >
        <button type="button" onClick={handleNavigateAddProduct}>
          <AiFillPlusCircle fontSize={40} color="#6F11E1" />
        </button>
      </div>
      <div className=" flex items-center m-auto gap-32">
        <div className="flex flex-col  items-center">
          <button type="button" onClick={handleNavigateHome}>
            <CgHomeAlt fontSize={34} color="#6F11E1" />
            <span className="text-[#6F11E1] text-[9px] items-center font-medium">
              Home
            </span>
          </button>
        </div>
        <div className="flex flex-col  items-center">
          <HiOutlineUser fontSize={34} color="#6F11E1" />
          <span className="text-[#6F11E1] text-[9px] items-center font-medium">
            Profile
          </span>
        </div>
      </div>
    </div>
  );
}
