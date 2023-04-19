import { combineReducers } from "@reduxjs/toolkit";
import { tokenReducer } from "./modules/token/token";
import { loginReducer } from "./modules/auth/login";
import { authReducer } from "./modules/auth/auth";

export const rootReducer = combineReducers({
  token: tokenReducer,
  auth: authReducer,

  login: loginReducer,
});
