import { useCallback } from "react";
import ReduxFetchState from "redux-fetch-state";
import { takeEvery, put } from "redux-saga/effects";

import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { FetchResult, handleSagaFetchError, sagaFetch } from "utils/fetch";
import {
  ProductSortingAction,
  ProductSortingForm,
  TProducts,
} from "../../../webServices/products";

const ProductSorting = new ReduxFetchState<
  TProducts[],
  ProductSortingForm,
  string
>("getAllProducts");

export function* watchProductSorting({ payload }: ProductSortingAction) {
  const { sort } = payload || {};
  try {
    const res: FetchResult<TProducts[]> = yield sagaFetch<TProducts[]>(
      `products?${sort}=desc`
    );
    yield put(ProductSorting.actions.loadSuccess(res.result));
  } catch (e: any) {
    yield put(ProductSorting.actions.loadFailure(e));
    yield handleSagaFetchError(e);
  }
}

export function* productSortingSagas() {
  yield takeEvery(ProductSorting.actionTypes.load, watchProductSorting);
}

export function useProductSorting() {
  const { data, ...productSortingState } = useAppSelector(
    (state) => state.productSorting
  );
  const dispatch = useAppDispatch();

  const dispatchProductSorting = useCallback(() => {
    dispatch(ProductSorting.actions.load());
  }, [dispatch]);

  return {
    ...productSortingState,
    dispatchProductSorting,
    products: data,
  };
}

export const {
  actionTypes: productSortingActionsTypes,
  actions: getAllProductsActions,
  reducer: productSortingReducer,
} = ProductSorting;
