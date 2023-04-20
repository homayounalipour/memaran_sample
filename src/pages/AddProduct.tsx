import { Layout } from "../kit/Layout";
import { AddProductInput } from "../component/AddProductInput";

export function AddProduct() {
  return (
    <Layout>
      <div className="flex justify-center items-center pt-10 ">
        <span className="font-normal text-xs leading-3 w-[33vw] text-[#737373] pb-5">
          A Lorem Ipsum text generator is specifically designed to generate a
          dummy text or placeholder text.
        </span>
      </div>
      <div className="flex  m-auto border w-[34vw]  rounded-lg flex-col">
        <span
          className="border bg-[#E4E4E4] w-[34vw] h-[9vh] rounded-t-md flex justify-start items-center px-20
          font-medium leading-5 text-base"
        >
          Add Product
        </span>
        <AddProductInput />
      </div>
    </Layout>
  );
}
