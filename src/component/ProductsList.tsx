import { ProductDetailModal } from "./ProductDetailModal";
import { TProduct } from "../webServices/products";
import { ProductCard } from "./ProductCard";
import { ProductLoadingSkeleton } from "./ProductLoadingSkeleton";
import { useCart } from "../store/modules/cart/cart";

export type ProductsListProps = {
  products: TProduct[] | null;
  loading: boolean;
};

export function ProductsList(props: ProductsListProps) {
  const { products, loading } = props;
  const { dispatchAddToCart } = useCart();

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
            <ProductCard
              key={product.id}
              product={product}
              onAddToCard={() => dispatchAddToCart(product)}
            />
          ))}
    </>
  );
}
