import { Layout } from "../kit/Layout";
import { PaymentInput } from "../component/PaymentInput";

export function Payment() {
  return (
    <Layout>
      <div className="pt-8 pb-4 flex justify-center">
        <div className="w-[34vw] border rounded-lg flex py-8 flex gap-12 px-10  justify-start  ">
          <span className="flex leading-5 text-base font-bold">
            Total Amount:
          </span>
          <span className="flex leading-5 text-base font-medium ">$1.620</span>
        </div>
      </div>
      <div className="flex  m-auto border w-[34vw]  rounded-lg flex-col">
        <span
          className="border bg-[#E4E4E4] w-[34vw] h-[9vh] rounded-t-md flex justify-start items-center px-20
          font-medium leading-5 text-base"
        >
          Payments
        </span>
        <PaymentInput />
      </div>
    </Layout>
  );
}
