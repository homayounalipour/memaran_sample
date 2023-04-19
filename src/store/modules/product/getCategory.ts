import { useCallback } from "react";
import ReduxFetchState from "redux-fetch-state";
import { takeEvery, put } from "redux-saga/effects";

import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { FetchResult, handleSagaFetchError, sagaFetch } from "utils/fetch";
import { TCategories } from "../../../webServices/categories";

const GetCategory = new ReduxFetchState<TCategories[], null, string>(
  "getCategory"
);

export function* watchGetCategory() {
  try {
    const res: FetchResult<TCategories[]> = yield sagaFetch<TCategories[]>(
      `/products/categories`
    );
    yield put(GetCategory.actions.loadSuccess(res.result));
  } catch (e: any) {
    yield put(GetCategory.actions.loadFailure(e));
    yield handleSagaFetchError(e);
  }
}

export function* getCategorySagas() {
  yield takeEvery(GetCategory.actionTypes.load, watchGetCategory);
}

export function useGetCategory() {
  const { data, ...getCategoryState } = useAppSelector(
    (state) => state.getCategory
  );
  const dispatch = useAppDispatch();

  const dispatchGetCategory = useCallback(() => {
    dispatch(GetCategory.actions.load());
  }, [dispatch]);

  return {
    ...getCategoryState,
    dispatchGetCategory,
    doctorAppointments: data,
  };
}

export const {
  actionTypes: getCategoryActionsTypes,
  actions: getCategoryActions,
  reducer: getCategoryReducer,
} = GetCategory;
