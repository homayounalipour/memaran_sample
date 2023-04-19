import { useCallback } from "react";
import ReduxFetchState from "redux-fetch-state";
import { takeEvery, put } from "redux-saga/effects";

// import { GetAppointmentsRes } from 'webServices/appointments';
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { FetchResult, handleSagaFetchError, sagaFetch } from "utils/fetch";
import { TProducts } from "../../../webServices/products";

const GetProductWithId = new ReduxFetchState<TProducts, null, string>(
  "getProductWithId"
);

export function* watchGetProductWithId(payload) {
  try {
    const res: FetchResult<TProducts> = yield sagaFetch<TProducts[]>(
      `/products//${payload.id}`
    );
    yield put(GetProductWithId.actions.loadSuccess(res.result));
  } catch (e: any) {
    yield put(GetProductWithId.actions.loadFailure(e));
    yield handleSagaFetchError(e);
  }
}

export function* getProductWithIdSagas() {
  yield takeEvery(GetProductWithId.actionTypes.load, watchGetProductWithId);
}

export function useGetProductWithId() {
  const { data, ...getProductWithIdState } = useAppSelector(
    (state) => state.getProductWithId
  );
  const dispatch = useAppDispatch();

  const dispatchGetProductWithId = useCallback(() => {
    dispatch(GetProductWithId.actions.load());
  }, [dispatch]);

  return {
    ...getProductWithIdState,
    dispatchGetProductWithId,
    doctorAppointments: data,
  };
}

export const {
  actionTypes: getProductWithIdActionsTypes,
  actions: getProductWithIdActions,
  reducer: getProductWithIdReducer,
} = GetProductWithId;
