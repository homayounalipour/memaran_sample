import { combineReducers } from "@reduxjs/toolkit";
import { tokenReducer } from "./modules/token/token";
import { loginReducer } from "./modules/auth/login";
import { authReducer } from "./modules/auth/auth";
import { getProductsReducer } from "./modules/product/getProducts";
import { getProductWithIdReducer } from "./modules/product/getProductWithId";
import { getCategoryReducer } from "./modules/product/getCategory";
import { productSortingReducer } from "./modules/product/productSorting";
import { addProductReducer } from "./modules/product/addProduct";

export const rootReducer = combineReducers({
  token: tokenReducer,
  auth: authReducer,
  login: loginReducer,
  getAllProducts: getProductsReducer,
  getProductWithId: getProductWithIdReducer,
  getCategory: getCategoryReducer,
  productSorting: productSortingReducer,
  addProduct: addProductReducer,
});
