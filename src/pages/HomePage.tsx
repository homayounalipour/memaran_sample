import { Banner } from "../assets/images/index";
import { HiSortDescending } from "react-icons/hi";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { Hr } from "../kit/Hr";
import { CardShop } from "../component/CardShop";
import { LayOut } from "../kit/LayOut";

export function HomePage() {
  return (
    <LayOut>
      <div className="pt-3">
        <img src={Banner} alt="Banner" />
      </div>
      <div className="pt-6 px-36">
        <div className="flex flex-row gap-7 items-center ">
          <span className="flex text-base font-medium leading-5 gap-2">
            <HiSortDescending size={23} />
            sorting:
          </span>
          <div className="flex flex-row justify-center items-center gap-8">
            <button className="hover:text-[#6F11E1] hover:font-medium cursor-pointer flex flex-row text-sm leading-4 font-normal">
              Ascending <BsArrowUp size={16} />
            </button>
            <button className="hover:text-[#6F11E1] cursor-pointer hover:font-medium flex flex-row text-sm leading-4 font-normal">
              descending <BsArrowDown size={16} />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <Hr />
        </div>
        <div className="pt-2 grid grid-cols-4">
          <CardShop />
        </div>
      </div>
    </LayOut>
  );
}
