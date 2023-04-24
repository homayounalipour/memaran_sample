import { HiMinusCircle } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { CartItem } from "../store/modules/cart/cart";
import { useMediaQuery } from "../hooks/mediaQueryHooks";
import { Hr } from "../kit/Hr";

export type CardItemProps = {
  cartItem: CartItem;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function CardItem(props: CardItemProps) {
  const {
    cartItem: { product, quantity },
    onIncrease,
    onDecrease,
  } = props;

  const isSm = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div className=" ">
        {isSm ? (
          <div className="flex flex-col">
            <div className="flex px-2 ">
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: 132,
                  height: 95,
                  borderRadius: 10,
                  padding: 0,
                }}
              />
              <div className="flex pt-8 pb-4 px-10 gap-1 ">
                <button type="button" onClick={onDecrease}>
                  <HiMinusCircle color="#FD6644" size={28} />
                </button>
                <span className="border px-6 py-2 rounded-lg">{quantity}</span>
                <button type="button" onClick={onIncrease}>
                  <BsFillPlusCircleFill size={24} color="#FD6644" />
                </button>
              </div>
            </div>
            <div className="py-2">
              <Hr />
            </div>
            <div className="flex flex-col pt-3  ">
              <div className=" flex justify-between items-center ">
                <span>Name</span>
                <span className=" font-medium leading-5 xl:text-base text-sm max-sm:text-xs max-sm:leading-3">
                  {product.title}
                </span>
              </div>
              <div className="py-2">
                <Hr />
              </div>
              <div className=" flex justify-between items-center">
                <span>price</span>
                <span className=" font-medium leading-5 text-sm">
                  ${product.price}
                </span>
              </div>
              <div className="py-2">
                <Hr />
              </div>
              <div className=" flex justify-between items-center">
                <span>Total</span>
                <span className=" font-medium leading-5 text-sm">
                  ${quantity * +product.price}
                </span>
              </div>
            </div>
          </div>
        ) : null}
        <div className="px-14 pt-8 flex justify-between items-center max-sm:hidden">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: 132, height: 95 }}
          />
          <span className="w-[10vw] font-medium leading-5 text-base">
            {product.title}
          </span>
          <span className="w-[7vw] font-medium leading-5 text-base">
            ${product.price}
          </span>
          <span className=" font-medium leading-5 text-base">
            ${quantity * +product.price}
          </span>
        </div>
        <div className="flex pt-8 pb-4 px-14 items-center gap-1 max-sm:hidden">
          <button type="button" onClick={onDecrease}>
            <HiMinusCircle color="#FD6644" size={28} />
          </button>
          <span className="border px-6 py-2 rounded-lg">{quantity}</span>
          <button type="button" onClick={onIncrease}>
            <BsFillPlusCircleFill size={24} color="#FD6644" />
          </button>
        </div>
      </div>
    </>
  );
}
