import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validator } from "./validators";

export type LoginForm = {
  username: string;
  password: string;
};

export const loginFormSchema = () =>
  yup.object({
    username: validator.string(true),
    password: validator.string(true),
  });

export const loginFormYup = () => yupResolver(loginFormSchema());
