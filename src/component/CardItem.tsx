import { HiMinusCircle } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { CartItem, useCart } from "../store/modules/cart/cart";

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
  const { cart } = useCart();

  return (
    <>
      <div className="px-14 pt-8 flex justify-between items-center ">
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
      <div className="flex pt-8 pb-4 px-14 items-center gap-1">
        <button type="button" onClick={onDecrease}>
          <HiMinusCircle color="#FD6644" size={28} />
        </button>
        <span className="border px-6 py-2 rounded-lg">{quantity}</span>
        <button type="button" onClick={onIncrease}>
          <BsFillPlusCircleFill size={24} color="#FD6644" />
        </button>
      </div>
    </>
  );
}
