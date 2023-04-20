export type TProducts = {
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
  category?: string;
};

export type GetProductsAction = {
  type: string;
  payload: GetProductsForm;
};

export type ProductSortingForm = {
  sort: string;
};
export type ProductSortingAction = {
  type: string;
  payload: ProductSortingForm;
};

export type AddProductRes = Pick<
  TProducts,
  "id" | "title" | "price" | "image" | "category" | "description"
>;

export type AddProductForm = Pick<
  TProducts,
  "title" | "price" | "image" | "category" | "description"
>;

export type AddProductAction = {
  type: string;
  payload: AddProductForm;
};
