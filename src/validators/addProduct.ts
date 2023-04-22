import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validator } from "./validators";

export type AddProductForm = {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  image?: string;
  price?: string;
};

export const addProductSchema = () =>
  yup.object({
    title: validator.string(true),
    description: validator.string(true),
    category: validator.string(true),
    image: validator.url(true),
    price: validator.price(true),
  });

export const addProductYup = () => yupResolver(addProductSchema());
