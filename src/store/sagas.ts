import { all } from "redux-saga/effects";
import { TStoreRedux } from "./store";
import { loginSagas } from "./modules/auth/login";
import { getProductsSagas } from "./modules/product/getProducts";
import { getProductWithIdSagas } from "./modules/product/getProductWithId";
import { getCategoriesSagas } from "./modules/product/getCategories";
import { productSortingSagas } from "./modules/product/productSorting";
import { addProductSagas } from "./modules/product/addProduct";
import {initSaga} from "./modules/init/init";
export default function* rootSaga(store: TStoreRedux) {
  yield all([
    initSaga(),
    loginSagas(),
    getProductsSagas(),
    getProductWithIdSagas(),
    getCategoriesSagas(),
    productSortingSagas(),
    addProductSagas(),
  ]);
}
