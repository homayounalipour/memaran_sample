import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { put, select } from "redux-saga/effects";

import { config } from "config";
import { TReduxState } from "../store/store";

export type FetchResult<Data> = {
  result: Data;
  status: number;
};

export function fetch<Data, Form = any>(
  url: string,
  options: AxiosRequestConfig<Form> = {},
  baseUrl?: string
): Promise<FetchResult<Data>> {
  return new Promise((resolve, reject) => {
    const axiosUrl = `${baseUrl ?? config.apiUrl}${url}`;

    return axios(axiosUrl, {
      ...options,
      // timeout: 10000,
    })
      .then((res: any) => {
        if (config?.debugFetch) {
          console.log(axiosUrl, res.data, "res is here", res.status);
        }
        if (res.status) {
          if (res.status.toString().split("")[0] === "2") {
            console.log(res, "res is here ");
            return resolve({
              result: res.data,
              status: res.status,
            });
          } else {
            return reject(res);
          }
        } else {
          return reject({
            message: "errors.INTERNET",
            translate: true,
          });
        }
      })
      .catch((e: any) => {
        if (config.debugFetch) {
          console.log(JSON.parse(JSON.stringify(e)), e, "error inside fetch");
        }
        reject(e);
      });
  });
}

export function* sagaFetch<Data, Form = any>(
  url: string,
  options: AxiosRequestConfig<Form> = {},
  baseUrl?: string
) {
  const { token } = yield select((state: TReduxState) => state.token);

  if (token) {
    options = {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    };
  }

  // @ts-ignore
  return yield fetch<Data, Form>(url, options, baseUrl);
}

export type ClientError = {
  status?: number;
  message?: string;
};

export const handleFetchError = (e: AxiosError<ClientError>): ClientError => {
  const { message, response } = e;
  const { status, data } = response || {};

  const _message = data?.message ?? message;

  return {
    status,
    message: _message,
  };
};

export type HandleSagaFetchErrorOptions = {
  showErrorAlert?: boolean;
  // type?: AlertMode;
};

export function* handleSagaFetchError(
  e: AxiosError<ClientError>,
  options: HandleSagaFetchErrorOptions = {}
) {
  const { message, status } = handleFetchError(e);

  // if (status === 401) {
  //   yield put(removeToken());
  //   yield put(profileActions.resetCache());
  //   yield put(profileActions.loadSuccess());
  //   yield put(userLoggedIn(false, false, null));
  //   customHistory.push("/auth/login");
  // }
}
