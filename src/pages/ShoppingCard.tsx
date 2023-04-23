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
      <div className="lg:px-36 max-sm:px-8 pt-8">
        <span className="font-medium text-base leading-5">Shopping Cart</span>
      </div>
      <div>
        <div className="lg:grid lg:grid-cols-3  lg:px-36 pt-8 gap-2">
          <div
            className={`col-span-2 h-full rounded-lg shadow-lg max-sm:flex max-sm:flex-col max-sm:items-center gap-1`}
          >
            <div
              className=" border bg-[#E4E4E4] h-[9vh]  max-sm:w-[299px] rounded-t-md flex justify-between items-center px-14 md:px-16
          font-medium leading-5 text-base"
            >
              <span className="">Product details</span>
              <span className="md:flex hidden">Name</span>
              <span className="md:flex hidden">price</span>
              <span className="md:flex hidden">Total</span>
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
