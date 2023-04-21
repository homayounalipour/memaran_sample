import { useCallback } from "react";
import ReduxFetchState from "redux-fetch-state";
import { put, takeEvery, take, select } from "redux-saga/effects";

import {
  LoginForm,
  LoginPayload,
  LoginRes,
} from "../../../webServices/authentication";
import {
  FetchResult,
  handleSagaFetchError,
  sagaFetch,
} from "../../../utils/fetch";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";
import { setToken } from "../token/token";
import { userLoggedIn } from "./auth";
import { routers } from "../../../routes/routers";

const Login = new ReduxFetchState<LoginRes, LoginForm, { message: string }>(
  "login"
);

export function* watchLogin({ payload }: LoginPayload) {
  try {
    const res: FetchResult<LoginRes> = yield sagaFetch<LoginRes>(
      `/auth/login`,
      {
        method: "POST",
        data: payload,
      }
    );

    if (res.result.token) {
      yield put(setToken(res.result.token));
      yield put(userLoggedIn(true));
      yield routers.navigate("/home", { replace: true });
    }
    yield put(Login.actions.loadSuccess(res.result));
  } catch (e: any) {
    yield handleSagaFetchError(e);
    yield put(Login.actions.loadFailure({ message: e.response.data }));
  }
}

export function* loginSagas() {
  yield takeEvery(Login.actionTypes.load, watchLogin);
}

export function useLogin() {
  const { data, ...loginState } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const dispatchLogin = useCallback(
    (form: LoginForm) => {
      dispatch(Login.actions.load(form));
    },
    [dispatch]
  );

  const dispatchResetLogin = useCallback(() => {
    dispatch(Login.actions.resetCache());
  }, [dispatch]);

  return {
    ...loginState,
    dispatchLogin,
    dispatchResetLogin,
    login: data,
  };
}

export const {
  actionTypes: loginActionsTypes,
  actions: loginActions,
  reducer: loginReducer,
} = Login;
