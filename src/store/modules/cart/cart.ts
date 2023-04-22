import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";
import { TProduct } from "../../../webServices/products";
import { toast } from "react-toastify";

export type CartItem = {
  product: TProduct;
  quantity: number;
};

export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (product: TProduct) => ({
  type: ADD_TO_CART,
  product,
});

export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
export const increaseCartItem = (id: string) => ({
  type: INCREASE_CART_ITEM,
  id,
});

export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";
export const decreaseCartItem = (id: string) => ({
  type: DECREASE_CART_ITEM,
  id,
});

export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const removeCartItem = (id: string) => ({
  type: REMOVE_CART_ITEM,
  id,
});

export type CartState = {
  cart: CartItem[];
  totalPrice: number;
};

export type CartAction = {
  type: string;
  product: TProduct;
  id: string;
};
export const cartInitialState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const cartReducer = (
  state: CartState = cartInitialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.some((item) => item.product.id === action.product.id)) {
        const cartClone = [...state.cart];
        const selectedIndex = cartClone.findIndex(
          (item) => item.product.id === action.product.id
        );
        const selectedProduct = { ...cartClone[selectedIndex] };
        selectedProduct.quantity++;
        cartClone[selectedIndex] = selectedProduct;
        return {
          cart: cartClone,
          totalPrice: state.totalPrice + +action.product.price,
        };
      } else {
        const addedProduct: CartItem = {
          product: action.product,
          quantity: 1,
        };

        return {
          cart: [...state.cart, addedProduct],
          totalPrice: state.totalPrice + +action.product.price,
        };
      }
    case INCREASE_CART_ITEM: {
      const cartClone = [...state.cart];
      const selectedIndex = cartClone.findIndex(
        (item) => item.product.id === action.id
      );
      const selectedProduct = { ...cartClone[selectedIndex] };
      selectedProduct.quantity++;
      cartClone[selectedIndex] = selectedProduct;

      return {
        cart: cartClone,
        totalPrice: state.totalPrice + +selectedProduct.product.price,
      };
    }
    case DECREASE_CART_ITEM:
      let cartClone = [...state.cart];
      const selectedIndex = cartClone.findIndex(
        (item) => item.product.id === action.id
      );
      const selectedProduct = { ...cartClone[selectedIndex] };
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity--;
        cartClone[selectedIndex] = selectedProduct;
      } else {
        cartClone = cartClone.filter((item) => item.product.id !== action.id);
      }
      if (selectedProduct.quantity >= 1) {
        toast.success("product has been removed");
      }

      return {
        cart: cartClone,
        totalPrice: state.totalPrice - +selectedProduct.product.price,
      };
    case REMOVE_CART_ITEM: {
      const selectedProduct = state.cart.find(
        (item) => item.product.id === action.product.id
      );
      return {
        cart: state.cart.filter((item) => item.product.id !== action.id),
        totalPrice: selectedProduct
          ? state.totalPrice -
            +selectedProduct.product.price * selectedProduct.quantity
          : state.totalPrice,
      };
    }
    default:
      return state;
  }
};

export function useCart() {
  const { cart, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const dispatchAddToCart = useCallback(
    (product: TProduct) => {
      dispatch(addToCart(product));
      toast.success("product has been added");
    },
    [dispatch]
  );
  const dispatchIncreaseCart = useCallback(
    (id: string) => {
      dispatch(increaseCartItem(id));
    },
    [dispatch]
  );

  const dispatchDecreaseCart = useCallback(
    (id: string) => {
      dispatch(decreaseCartItem(id));
    },
    [dispatch]
  );

  const dispatchRemoveCart = useCallback(
    (id: string) => {
      dispatch(removeCartItem(id));
      toast.success("product has been removed");
    },
    [dispatch]
  );

  return {
    cart,
    totalPrice,
    dispatchAddToCart,
    dispatchIncreaseCart,
    dispatchDecreaseCart,
    dispatchRemoveCart,
  };
}
