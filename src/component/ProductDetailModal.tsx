import { Modal } from "@mui/material";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TProduct } from "../webServices/products";
import { useMediaQuery } from "../hooks/mediaQueryHooks";

export type ProductDetailModalProps = {
  onSubmit?: () => void;
  onclose?: () => void;
  onAddToCard?: () => void;
  visible: boolean;
  product: TProduct;
};

export function ProductDetailModal(props: ProductDetailModalProps) {
  const { onclose, visible, product, onSubmit } = props;

  const isSm = useMediaQuery("(max-width:425px)");

  return (
    <Modal
      open={visible}
      onClose={onclose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999999,
      }}
    >
      <div className=" bg-white rounded-lg w-[70vw] flex justify-center flex-col max-sm:w-[300px] ">
        <div className="border w-[70vw] bg-[#E4E4E4] h-[9vh] items-center md:px-28 max-sm:px-5 max-sm:w-[300px] flex flex-row justify-between rounded-t-lg">
          <span className="font-medium leading-5 text-base rounded-t-md flex flex  items-center">
            Product Detail
          </span>
          <Rating name="custom-no-value" value={+product.rating.count} />
        </div>
        <div className="flex md:flex-row lg:px-24 lg:py-16 md:px-10 md:py-10 max-sm:px-5 max-sm:flex-col max-sm:py-4">
          <div className="md:pr-4 ">
            <img
              src={product?.image}
              alt={product?.image}
              style={{ width: 356, height: 257, borderRadius: 10 }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-base leading-5 pb-5 pt-1 max-sm:pt-2">
              {product?.title}
            </span>
            <span className="font-normal text-[#737373] text-xs lg:w-[15vw] max-sm:w-full md:w-full leading-4 pb-2">
              {product?.description}
            </span>

            <div className="flex flex-row md:gap-36  max-sm:justify-between items-center mt-auto max-sm:pt-5">
              <span className="text-base font-medium leading-5">
                ${product?.price}
              </span>
              <button
                onClick={onSubmit}
                type="submit"
                className="flex flex-row justify-center p-1 items-center bg-[#6F11E1] max-sm:text-sm md:w-[165px] md:h-[43px] rounded md:gap-2 text-white"
              >
                <Badge color="warning">
                  <HiOutlineShoppingBag
                    color="white"
                    fontSize={isSm ? 35 : 38}
                    className="bg-[#6F11E1] rounded p-1.5"
                  />
                </Badge>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
