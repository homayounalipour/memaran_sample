import { useCallback } from "react";
import ReduxFetchState from "redux-fetch-state";
import { takeEvery, put } from "redux-saga/effects";

import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { FetchResult, handleSagaFetchError, sagaFetch } from "utils/fetch";
import { TCategories } from "../../../webServices/categories";

const GetCategories = new ReduxFetchState<TCategories[], null, string>(
  "getCategories"
);

export function* watchGetCategories() {
  try {
    const res: FetchResult<TCategories[]> = yield sagaFetch<TCategories[]>(
      `/products/categories`
    );
    yield put(GetCategories.actions.loadSuccess(res.result));
  } catch (e: any) {
    yield put(GetCategories.actions.loadFailure(e));
    yield handleSagaFetchError(e);
  }
}

export function* getCategoriesSagas() {
  yield takeEvery(GetCategories.actionTypes.load, watchGetCategories);
}

export function useGetCategories() {
  const { data, ...getCategoriesState } = useAppSelector(
    (state) => state.getCategories
  );
  const dispatch = useAppDispatch();

  const dispatchGetCategories = useCallback(() => {
    dispatch(GetCategories.actions.load());
  }, [dispatch]);

  return {
    ...getCategoriesState,
    dispatchGetCategories,
    categories: data,
  };
}

export const {
  actionTypes: getCategoriesActionsTypes,
  actions: getCategoriesActions,
  reducer: getCategoriesReducer,
} = GetCategories;
