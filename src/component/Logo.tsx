import React from "react";
import { Logo } from "../assets/images/index";

export function LogoApp() {
  return (
    <div className=" flex flex-row justify-center items-center ">
      <img src={Logo} alt="Logo" className="pr-2" width={44} height={49} />
      <span
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F27800]
             from-0% via-[#F57A24] via-35% to-[#F97D4B] to-75% flex justify-center items-center pt-2"
      >
        ECO
      </span>
      <p
        className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#F27800]
             from-0% via-[#F57A24] via-35% to-[#F97D4B] to-75% flex justify-center items-center pt-2"
      >
        shop
      </p>
    </div>
  );
}
