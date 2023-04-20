import { combineReducers } from "@reduxjs/toolkit";
import { tokenReducer } from "./modules/token/token";
import { loginReducer } from "./modules/auth/login";
import { authReducer } from "./modules/auth/auth";
import { getProductsReducer } from "./modules/product/getProducts";
import { getProductWithIdReducer } from "./modules/product/getProductWithId";
import { getCategoriesReducer } from "./modules/product/getCategories";
import { productSortingReducer } from "./modules/product/productSorting";
import { addProductReducer } from "./modules/product/addProduct";
import {initReducer} from "./modules/init/init";

export const rootReducer = combineReducers({
  init: initReducer,
  token: tokenReducer,
  auth: authReducer,
  login: loginReducer,
  getAllProducts: getProductsReducer,
  getProductWithId: getProductWithIdReducer,
  getCategories: getCategoriesReducer,
  productSorting: productSortingReducer,
  addProduct: addProductReducer,
});
