import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import { Hr } from "../kit/Hr";
import { truncate } from "../utils/truncate";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TProducts } from "../webServices/products";

export type ProductsListProps = {
  product: TProducts;
};
export function ProductCard(props: ProductsListProps) {
  const { product } = props;

  return (
    <div className="pb-2  grid grid-cols-4">
      <div
        className="w-[18vw] relative rounded-xl px-1 pt-2 shadow-md hover:bg-[#EAD9FF]
             cursor-pointer group overflow-hidden"
      >
        <div className="flex items-center flex-col h-full">
          <div className="drop-shadow-lg w-full aspect-w-14 aspect-h-12">
            <img
              className="w-full h-full object-center rounded-lg"
              src={product.image}
              alt={product.image}
            />
          </div>
          <div className="px-1 py-3 flex gap-14">
            <Chip
              label={product.category}
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
            {truncate(product.title, 50)}
          </span>
          <div className="w-[17.5vw] py-3">
            <Hr />
          </div>
          <span className="text-sm text-[#737373] leading-1 px-2 font-normal ">
            {truncate(product.description, 100)}
          </span>
          <div className=" flex justify-between gap-32 py-5 mt-auto">
            <span className="flex items-center">$ {product.price}</span>
            <button>
              <HiOutlineShoppingBag
                color="white"
                fontSize={43}
                className="bg-[#6F11E1] rounded p-1.5"
              />
            </button>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0 right-0 h-2 group-hover:bg-[#6F11E1]" />
      </div>
    </div>
  );
}
