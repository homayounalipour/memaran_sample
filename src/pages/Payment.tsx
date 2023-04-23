import { Layout } from "../kit/Layout";
import { PaymentInput } from "../component/PaymentInput";
import { TGuard, WithGuard } from "../component/hoc/WithGuard";
import { useCart } from "../store/modules/cart/cart";

function Payment() {
  // const { visible, handleCloseModal } = props;

  const { totalPrice } = useCart();

  return (
    <Layout hasFooter={false}>
      <div className="pt-8 pb-4 flex justify-center">
        <div className="md:w-[38vw] xl:w-[34vw] border rounded-lg flex py-8 flex gap-12 px-10 max-sm:w-[301px]  justify-start  ">
          <span className="flex leading-5 text-base font-bold">
            Total Amount:
          </span>
          <span className="flex leading-5 text-base font-medium ">
            $ {totalPrice.toFixed(3)}
          </span>
        </div>
      </div>
      <div className="flex m-auto border w-[34vw] max-sm:w-[300px] md:w-[38vw] rounded-lg flex-col">
        <span
          className="border bg-[#E4E4E4] w-[34vw] h-[9vh] max-sm:w-[300px] md:w-[38vw] rounded-t-md flex justify-start items-center px-20
          font-medium leading-5 text-base"
        >
          Payments
        </span>

        <PaymentInput />
      </div>
    </Layout>
  );
}

const PaymentHoc = WithGuard(Payment, TGuard.LoggedIn);

export { PaymentHoc as Payment };
