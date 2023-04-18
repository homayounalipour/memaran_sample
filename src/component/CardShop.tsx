import { shoe } from "../assets/images/index";
import { Hr } from "../kit/Hr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import { ProductDetailModal } from "./ProductDetailModal";

export type CardShopProps = {
  id: string;
  image: string;
  Category: string;
  title: string;
  description: string;
  price: string;
};
const cardsDetails = [
  {
    id: 1,
    image: { shoe },
    Category: "clothes",
    title: "Nike Triple Black Air Force 1 '07 sneakers",
    description:
      "A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.",
    price: "$1.620",
  },
  {
    id: 2,
    image: { shoe },
    Category: "clothes",
    title: "Nike Triple Black Air Force 1 '07 sneakers",
    description:
      "A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.",
    price: "$1.620",
  },
  {
    id: 3,
    image: { shoe },
    Category: "clothes",
    title: "Nike Triple Black Air Force 1 '07 sneakers",
    description:
      "A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.",
    price: "$1.620",
  },
  {
    id: 4,
    image: { shoe },
    Category: "clothes",
    title: "Nike Triple Black Air Force 1 '07 sneakers",
    description:
      "A Lorem Ipsum text generator is specifically designed to generate a dummy text or placeholder text.",
    price: "$1.620",
  },
];

export function CardShop() {
  return (
    <>
      <ProductDetailModal />
      {cardsDetails &&
        cardsDetails.map((cardDetail) => (
          <div className="pb-2">
            <div
              className="w-[18vw] h-[55vh] border rounded-xl px-1 py-1 shadow-md hover:bg-[#EAD9FF]
             cursor-pointer hover:border-b-8 hover:border-b-[#6F11E1] "
            >
              <div className=" flex justify-center flex-col">
                <img src={shoe} alt={cardDetail.image.shoe} />
                <div className="px-1 py-1 flex justify-between">
                  <Chip
                    label={cardDetail.Category}
                    style={{
                      background: "#F74528",
                      width: 70,
                      height: 24,
                      fontWeight: 500,
                      lineHeight: 14,
                      fontSize: 12,
                      color: "white",
                    }}
                  />
                  <Rating name="half-rating" defaultValue={4} />
                </div>
                <span className="pl-2 font-medium leading-5 text-base">
                  {cardDetail.title}
                </span>
                <div className="w-[17.5vw] pt-2">
                  <Hr />
                </div>
                <span className="pl-2 font-normal text-xs  leading-4 pt-2">
                  {cardDetail.description}
                </span>
                <div className="flex flex-row justify-between items-center py-5 px-5">
                  <span className="flex justify-center items-center">
                    {cardDetail.price}
                  </span>
                  <HiOutlineShoppingBag
                    color="white"
                    fontSize={43}
                    className="bg-[#6F11E1] rounded p-1.5"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
