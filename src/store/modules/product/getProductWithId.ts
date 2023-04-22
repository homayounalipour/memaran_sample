import { useCallback } from "react";
import ReduxFetchState from "redux-fetch-state";
import { takeEvery, put } from "redux-saga/effects";

// import { GetAppointmentsRes } from 'webServices/appointments';
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { FetchResult, handleSagaFetchError, sagaFetch } from "utils/fetch";
import {
  GetProductIdAction,
  GetProductIdForm,
  GetProductIdRes,
} from "../../../webServices/products";

const GetProductWithId = new ReduxFetchState<
  GetProductIdRes,
  GetProductIdForm,
  string
>("getProductWithId");

export function* watchGetProductWithId({ payload }: GetProductIdAction) {
  const { id } = payload || {};
  try {
    const res: FetchResult<GetProductIdRes> = yield sagaFetch<GetProductIdRes>(
      `/products/${payload.id}`
    );
    console.log(id, "productId is here");
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

  const dispatchGetProductWithId = useCallback(
    (form?: GetProductIdForm) => {
      dispatch(GetProductWithId.actions.load(form));
    },
    [dispatch]
  );

  return {
    ...getProductWithIdState,
    dispatchGetProductWithId,
    productId: data,
  };
}

export const {
  actionTypes: getProductWithIdActionsTypes,
  actions: getProductWithIdActions,
  reducer: getProductWithIdReducer,
} = GetProductWithId;
