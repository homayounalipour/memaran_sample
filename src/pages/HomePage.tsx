import { Banner } from "../assets/images/index";
import { HiSortDescending } from "react-icons/hi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Hr } from "../kit/Hr";
import { ProductsList } from "../component/ProductsList";
import { Layout } from "../kit/Layout";
import { useGetProducts } from "../store/modules/product/getProducts";
import { useEffect } from "react";
import { useLocationQuery } from "../hooks/useLocationQuery";
import { useInitApp } from "../store/modules/init/init";
import { TGuard, WithGuard } from "../component/hoc/WithGuard";
import { Sorting } from "../webServices/products";
import { Link } from "react-router-dom";
import { TCategories } from "../webServices/categories";

function HomePage() {
  const { init } = useInitApp();

  const {
    products,
    dispatchGetProducts,
    loading: productsLoading,
  } = useGetProducts();

  const { query } = useLocationQuery<{
    category: TCategories;
    sort: Sorting;
  }>();

  useEffect(() => {
    dispatchGetProducts(query);
  }, [query?.category, query?.sort]);

  return (
    <Layout loading={init.loading}>
      <div className="pt-3">
        <img src={Banner} alt="Banner" />
      </div>
      <div className="pt-6 px-36">
        <div className="flex flex-row gap-7 items-center ">
          <span className="flex text-base font-medium leading-5 gap-2">
            <HiSortDescending size={23} />
            sorting:
          </span>
          <div className="flex flex-row justify-center items-center gap-8">
            <Link
              to={`/home?sort=${Sorting.Ascending}`}
              className={`hover:text-[#6F11E1] hover:font-medium 
            cursor-pointer flex flex-row text-sm leading-4 font-normal  ${
              query?.sort &&
              query?.sort === Sorting.Ascending &&
              "text-[#6F11E1]"
            }`}
            >
              Ascending <BsArrowUp size={16} />
            </Link>
            <Link
              to={`/home?sort=${Sorting.Descending}`}
              className={`hover:text-[#6F11E1] cursor-pointer 
            hover:font-medium flex flex-row text-sm leading-4 font-normal  ${
              query?.sort &&
              query?.sort === Sorting.Descending &&
              "text-[#6F11E1]"
            }`}
            >
              descending <BsArrowDown size={16} />
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <Hr />
        </div>
        <div className="pt-2 grid grid-cols-4">
          <ProductsList products={products} loading={productsLoading} />
        </div>
      </div>
    </Layout>
  );
}
const HomePageHoc = WithGuard(HomePage, TGuard.LoggedIn);

export { HomePageHoc as HomePage };
