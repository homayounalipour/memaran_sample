import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validator } from "./validators";

export type AddProductForm = {
  Title?: string;
  Description?: string;
  Category?: string;
  ImageUrl?: string;
  Price?: string;
  total?: string;
};

export const addProductSchema = () =>
  yup.object({
    Title: validator.string(true),
    Description: validator.string(true),
    Category: validator.string(true),
    ImageUrl: validator.url(true),
    Price: validator.price(true),
  });

export const addProductYup = () => yupResolver(addProductSchema());
