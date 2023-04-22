import { useCart } from "../store/modules/cart/cart";
import { CardItem } from "./CardItem";

export function CardList() {
  const { cart, dispatchIncreaseCart, dispatchDecreaseCart } = useCart();

  return (
    <div className={`${cart ? "h-full" : "h-[286px]"}`}>
      {cart.map((product) => (
        <CardItem
          key={product.product.id}
          cartItem={product}
          onIncrease={() => dispatchIncreaseCart(product.product.id)}
          onDecrease={() => dispatchDecreaseCart(product.product.id)}
        />
      ))}
    </div>
  );
}
