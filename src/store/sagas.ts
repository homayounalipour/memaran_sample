import { all } from "redux-saga/effects";
import { TStoreRedux } from "./store";
import { loginSagas } from "./modules/auth/login";
import { getProductsSagas } from "./modules/product/getProducts";
import { getProductWithIdSagas } from "./modules/product/getProductWithId";
import { getCategorySagas } from "./modules/product/getCategory";
export default function* rootSaga(store: TStoreRedux) {
  yield all([
    loginSagas(),
    getProductsSagas(),
    getProductWithIdSagas(),
    getCategorySagas(),
  ]);
}
