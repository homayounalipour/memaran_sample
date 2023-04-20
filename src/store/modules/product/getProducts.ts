import { useCallback } from "react";
import ReduxFetchState from "redux-fetch-state";
import { takeEvery, put } from "redux-saga/effects";

import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { FetchResult, handleSagaFetchError, sagaFetch } from "utils/fetch";
import {
  GetProductsAction,
  GetProductsForm,
  TProducts,
} from "../../../webServices/products";

const GetProducts = new ReduxFetchState<TProducts[], GetProductsForm, string>(
  "getAllProducts"
);

export function* watchGetProducts({ payload }: GetProductsAction) {
  const { category } = payload || {};
  console.log(category, 'category is here')
  try {
    const url = category ? `/products/category/${category}` : "/products";
    const res: FetchResult<TProducts[]> = yield sagaFetch<TProducts[]>(url);
    yield put(GetProducts.actions.loadSuccess(res.result));
  } catch (e: any) {
    yield put(GetProducts.actions.loadFailure(e));
    yield handleSagaFetchError(e);
  }
}

export function* getProductsSagas() {
  yield takeEvery(GetProducts.actionTypes.load, watchGetProducts);
}

export function useGetProducts() {
  const { data, ...getProductsState } = useAppSelector(
    (state) => state.getAllProducts
  );
  const dispatch = useAppDispatch();

  const dispatchGetProducts = useCallback((form?: GetProductsForm) => {
    dispatch(GetProducts.actions.load(form));
  }, [dispatch]);

  return {
    ...getProductsState,
    dispatchGetProducts,
    products: data,
  };
}

export const {
  actionTypes: getProductsActionsTypes,
  actions: getAllProductsActions,
  reducer: getProductsReducer,
} = GetProducts;
