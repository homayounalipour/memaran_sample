import { Modal } from "@mui/material";
import { useCallback } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Hr } from "../kit/Hr";
import { useAddProduct } from "../store/modules/product/addProduct";
import { useCart } from "../store/modules/cart/cart";
import { useNavigate } from "react-router-dom";

export type AddProductModalProps = {
  onclose?: () => void;
  addProduct?: boolean;
  payment?: boolean;
  visible?: boolean;
};

export function ConfirmationModal(props: AddProductModalProps) {
  const { onclose, addProduct, payment, visible } = props;

  const { dispatchClearCartState } = useCart();
  const { addProduct: confirmProduct } = useAddProduct();
  const { totalPrice } = useCart();

  const navigate = useNavigate();

  const handleNavigateHome = useCallback(() => {
    dispatchClearCartState();
    navigate("/home");
  }, []);

  return (
    <Modal
      open={!visible}
      onClose={onclose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999999,
      }}
    >
      <div
        className="rounded-md  lg:w-[34vw] flex justify-center flex-col pt-3 max-sm:w-[291px] md:w-[380px]"
        style={{
          background: payment ? "#E8FFE4" : "white",
        }}
      >
        {addProduct ? (
          <div className="flex justify-center flex-col items-center ">
            <div className="py-4">
              <AiFillCheckCircle color="#1BAC03" size={38} />
            </div>
            <span className="font-medium leading-6 text-xl md:text-center  pb-12 max-sm:text-center max-sm:text-xs max-sm:leading-3">
              Your product has been successfully registered
            </span>
          </div>
        ) : (
          <div className="flex justify-center py-4 flex-col items-center">
            <AiFillCheckCircle color="#1BAC03" size={24} />
            <span className="font-medium text-[#1BAC03] max-sm:text-sm leading-6 text-xl pb-7 pt-5 ">
              your payment is successful
            </span>
          </div>
        )}
        <Hr />
        {addProduct && (
          <div className="flex flex-row  md:px-10 py-8  max-sm:block">
            <div className="pr-4 md:w-full  aspect-w-12 aspect-h-4 max-sm:aspect-w-16 max-sm:aspect-h-5">
              <img
                className="w-full h-full object-center rounded-lg max-sm:px-12 max-sm:rounded-lg"
                src={confirmProduct?.image}
                alt={confirmProduct?.image}
                width="132px"
                height="95px"
                // style={{ width: 132, height: 95 }}
              />
            </div>
            <div className="flex flex-col pl-3 max-sm:px-10 max-sm:py-4">
              <span className="font-medium text-base leading-5 pb-5">
                {confirmProduct?.title}
              </span>
              <span className="font-normal text-xs w-[18vw] leading-4 pb-2 max-sm:w-full">
                {confirmProduct?.description}
              </span>
              <span className="text-xs font-medium leading-4 pb-5">
                Category: {confirmProduct?.category}
              </span>
              <span className="text-base font-medium leading-5">
                Price: $ {confirmProduct?.price}
              </span>
            </div>
          </div>
        )}
        {payment && (
          <div>
            <div className="flex justify-center m-auto bg-[#E8FFE4] flex-col gap-12 pt-8">
              <div className="flex xl:justify-between xl:px-20 lg:justify-between  md:justify-between md:px-10 max-sm:justify-between max-sm:px-8">
                <span className="leading-5 text-base font-bold max-sm:text-xs">
                  Total Amount:
                </span>
                <span className="leading-5 text-base font-medium max-sm:text-xs">
                  $ {totalPrice.toFixed(3)}
                </span>
              </div>
              <div className="flex justify-evenly gap-4">
                <span className="leading-5 text-base font-bold max-sm:text-xs">
                  card number:
                </span>
                <span className="leading-5 text-base font-medium max-sm:text-xs">
                  1234.5687.****.****
                </span>
              </div>
              <div className="flex justify-evenly gap-12">
                <span className="leading-5 text-base font-bold max-sm:text-xs">
                  Tracking Code:
                </span>
                <span className="leading-5 text-base font-medium max-sm:text-xs">
                  12345678978
                </span>
              </div>
              <div className="flex justify-center pb-12 ">
                <button
                  type="button"
                  onClick={handleNavigateHome}
                  className="bg-[#1BAC03] rounded-md px-4 py-2 leading-5 text-base font-normal text-white max-sm:w-[240px] md:w-[240px]"
                >
                  Complete transaction
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
