import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validator } from "./validators";

export type LoginForm = {
  Username: string;
  Password: string;
};

export const loginFormSchema = () =>
  yup.object({
    Username: validator.email(),
    Password: validator.password(true),
  });

export const loginFormYup = () => yupResolver(loginFormSchema());
