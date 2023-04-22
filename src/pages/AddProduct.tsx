import { Layout } from "../kit/Layout";
import { AddProductInput } from "../component/AddProductInput";
import { TGuard, WithGuard } from "../component/hoc/WithGuard";
import { useAddProduct } from "../store/modules/product/addProduct";
import { useCallback, useEffect, useState } from "react";
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
        <AddProductInput
          visible={showModal}
          onAddProduct={handleAddProduct}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </Layout>
  );
}

const AddProductHoc = WithGuard(AddProduct, TGuard.LoggedIn);

export { AddProductHoc as AddProduct };
