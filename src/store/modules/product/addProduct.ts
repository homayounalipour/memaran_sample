import { useCallback } from "react";
import ReduxFetchState from "redux-fetch-state";
import { put, takeEvery } from "redux-saga/effects";

import {
  AddProductAction,
  AddProductForm,
  AddProductRes,
} from "../../../webServices/products";
import {
  FetchResult,
  handleSagaFetchError,
  sagaFetch,
} from "../../../utils/fetch";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";

const AddProduct = new ReduxFetchState<AddProductRes, AddProductForm, string>(
  "addProduct"
);

export function* watchAddProduct({ payload }: AddProductAction) {
  console.log(payload, "payload uis ///");
  try {
    const res: FetchResult<AddProductRes> = yield sagaFetch<AddProductRes>(
      `/products`,
      {
        method: "POST",
        data: payload,
      }
    );

    yield put(AddProduct.actions.loadSuccess(res.result));
  } catch (e: any) {
    yield handleSagaFetchError(e);
    yield put(AddProduct.actions.loadFailure(e));
    yield put(AddProduct.actions.resetForm());
  }
}

export function* addProductSagas() {
  yield takeEvery(AddProduct.actionTypes.load, watchAddProduct);
}

export function useAddProduct() {
  const { data, ...addProductState } = useAppSelector(
    (state) => state.addProduct
  );
  const dispatch = useAppDispatch();

  const dispatchAddProduct = useCallback(
    (form: AddProductForm) => {
      dispatch(AddProduct.actions.load(form));
    },
    [dispatch]
  );

  return {
    ...addProductState,
    dispatchAddProduct,
    // dispatchResetAddProduct,
    addProduct: data,
  };
}

export const {
  actionTypes: addProductActionsTypes,
  actions: addProductActions,
  reducer: addProductReducer,
} = AddProduct;
