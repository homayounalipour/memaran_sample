import { Layout } from "../kit/Layout";
import { ShoppingCardTab } from "../component/shoppingCardTab";
import { TGuard, WithGuard } from "../component/hoc/WithGuard";
import { CardList } from "../component/CardList";
import { useCart } from "../store/modules/cart/cart";
import { TProduct } from "../webServices/products";

export type ShoppingCardProp = {
  product?: TProduct;
};

function ShoppingCard(props: ShoppingCardProp) {
  const { product } = props;
  console.log(product?.id, "product");

  return (
    <Layout>
      <div className="px-36 pt-8">
        <span className="font-medium text-base leading-5">Shopping Cart</span>
      </div>
      <div>
        <div className="grid grid-cols-3  px-36 pt-8 gap-2 ">
          <div className={`col-span-2 h-full rounded-lg shadow-lg `}>
            <div
              className=" border bg-[#E4E4E4] h-[9vh] rounded-t-md flex justify-between items-center px-16
          font-medium leading-5 text-base"
            >
              <span>Product details</span>
              <span>Name</span>
              <span>price</span>
              <span>Total</span>
            </div>
            <CardList />
          </div>
          <ShoppingCardTab />
        </div>
      </div>
    </Layout>
  );
}

const ShoppingCardHoc = WithGuard(ShoppingCard, TGuard.LoggedIn);

export { ShoppingCardHoc as ShoppingCard };
