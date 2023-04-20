import { ProductDetailModal } from "./ProductDetailModal";
import { TProducts } from "../webServices/products";
import { ProductCard } from "./ProductCard";
import { ProductLoadingSkeleton } from "./ProductLoadingSkeleton";

export type ProductsListProps = {
  products: TProducts[] | null;
  loading: boolean;
};

export function ProductsList(props: ProductsListProps) {
  const { products, loading } = props;

  return (
    <>
      <ProductDetailModal />
      {loading
        ? Array(20)
            .fill(20)
            .map(() => {
              return <ProductLoadingSkeleton />;
            })
        : products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </>
  );
}
