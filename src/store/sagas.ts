import { all } from "redux-saga/effects";
import { TStoreRedux } from "./store";
import { loginSagas } from "./modules/auth/login";
export default function* rootSaga(store: TStoreRedux) {
  yield all([
      loginSagas()
  ]);
}
