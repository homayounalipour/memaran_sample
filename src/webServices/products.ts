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
