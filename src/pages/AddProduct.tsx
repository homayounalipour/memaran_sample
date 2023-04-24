import { Layout } from "../kit/Layout";
import { AddProductInput } from "../component/AddProductInput";
import { TGuard, WithGuard } from "../component/hoc/WithGuard";
import { useAddProduct } from "../store/modules/product/addProduct";
import { useCallback, useState } from "react";
import { AddProductForm } from "../webServices/products";

function AddProduct() {
  const { dispatchAddProduct } = useAddProduct();

  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = useCallback(
    (data: AddProductForm) => {
      dispatchAddProduct({
        id: data.id,
        image: data.image,
        price: data.price,
        description: data.description,
        title: data.title,
        category: data.category,
      });
      setShowModal(true);
    },
    [dispatchAddProduct]
  );

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center pt-10 max-sm:px-10">
        <span className="font-normal text-xs leading-3 xl:w-[34vw] lg:w-[45vw] md:w-[45vw] max-sm:w-full text-[#737373] pb-5">
          A Lorem Ipsum text generator is specifically designed to generate a
          dummy text or placeholder text.
        </span>
      </div>
      <div className=" max-sm:px-4 max-sm:py-4">
        <div className="flex m-auto border xl:w-[34vw] max-sm:w-full md:w-[50vw] rounded-lg flex-col ">
          <span
            className="border bg-[#E4E4E4] xl:w-[34vw] h-[9vh] max-sm:w-full md:w-[50vw] rounded-t-md flex justify-start items-center max-sm:px-5 md:px-20
          font-medium leading-5 text-base"
          >
            Add Product
          </span>
          <div className="max-sm:flex max-sm:justify-center md:flex md:justify-center ">
            <AddProductInput
              visible={showModal}
              onAddProduct={handleAddProduct}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const AddProductHoc = WithGuard(AddProduct, TGuard.LoggedIn);

export { AddProductHoc as AddProduct };
