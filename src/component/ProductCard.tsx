import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import { Hr } from "../kit/Hr";
import { truncate } from "../utils/truncate";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TProduct } from "../webServices/products";
import { ProductDetailModal } from "./ProductDetailModal";
import { useCallback, useState } from "react";

export type ProductsListProps = {
  product: TProduct;
  onAddToCard?: () => void;
};
export function ProductCard(props: ProductsListProps) {
  const { product, onAddToCard } = props;

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleSubmitModal = useCallback(() => {
    setShowModal(false);
    if (onAddToCard) {
      onAddToCard();
    }
  }, []);

  return (
    <>
      <ProductDetailModal
        onSubmit={handleSubmitModal}
        visible={showModal}
        onclose={handleCloseModal}
        product={product}
        onAddToCard={onAddToCard}
      />
      <div className="pb-2 md:grid md:grid-cols-4  max-sm:px-2  md:px-3 lg:px-0 ">
        <div
          onClick={handleShowModal}
          className="lg:w-[18vw] md:w-[22vw]  max-sm:w-[145px] max-sm:h-full relative rounded-xl px-1 pt-2 shadow-md hover:bg-[#EAD9FF]
             cursor-pointer group overflow-hidden"
        >
          <div className="flex items-center flex-col h-full ">
            <div className="drop-shadow-lg w-full aspect-w-14 aspect-h-12">
              <img
                className="w-full h-full object-center rounded-lg"
                src={product.image}
                alt={product.image}
              />
            </div>
            <div className="px-1 py-3 flex xl:gap-14 max-sm:gap-1 max-sm:flex-col max-sm:items-center md:flex-col xl:flex-row md:items-center">
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
              <Rating name="half-rating" value={+product.rating.rate} />
            </div>
            <span className="pl-2 font-medium leading-5 text-base max-sm:text-xs">
              {truncate(product.title, 50)}
            </span>
            <div className="w-[17.5vw] py-3">
              <Hr />
            </div>
            <span className="text-sm text-[#737373] leading-1 px-2 font-normal max-sm:text-[10px] ">
              {truncate(product.description, 100)}
            </span>
            <div className=" flex justify-between xl:gap-32 max-sm:gap-6 lg:gap-10 md:gap-6 py-5 mt-auto">
              <span className="flex items-center">${product.price}</span>
              <button type="button">
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
    </>
  );
}
