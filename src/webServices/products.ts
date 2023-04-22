import { TCategories } from "./categories";

export enum Sorting {
  Descending = "desc",
  Ascending = "asc",
}
export type TProduct = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: string;
  };
};

export type GetProductsForm = {
  category?: TCategories;
  sort?: Sorting;
};

export type GetProductsAction = {
  type: string;
  payload: GetProductsForm;
};

export type GetProductIdRes = Pick<
  TProduct,
  "image" | "price" | "id" | "description" | "title"
>;
export type GetProductIdForm = {
  id: string;
};

export type GetProductIdAction = {
  type: string;
  payload: GetProductIdForm;
};

export type AddProductRes = Pick<
  TProduct,
  "id" | "title" | "price" | "image" | "category" | "description"
>;

export type AddProductForm = Pick<
  TProduct,
  "title" | "price" | "image" | "category" | "description" | "id"
>;

export type AddProductAction = {
  type: string;
  payload: AddProductForm;
};
