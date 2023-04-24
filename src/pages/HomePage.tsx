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
import { useMediaQuery } from "../hooks/mediaQueryHooks";

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

  const isSm = useMediaQuery("(max-width:767px)");

  return (
    <Layout loading={init.loading} hasFooter>
      <div className="pt-3 max-sm:p-3">
        <img
          src={Banner}
          alt="Banner"
          style={{ borderRadius: isSm ? 10 : 0 }}
        />
      </div>
      <div className="lg:pt-6 lg:px-36 ">
        <div className="flex flex-row md:gap-7 items-center md:px-10 md:py-2 gap-3 max-sm:px-4">
          <span className="flex text-base font-medium leading-5 gap-2">
            <HiSortDescending size={23} />
            sorting:
          </span>
          <div className="flex flex-row  items-center gap-3 md:gap-8">
            <Link
              to={`/home?sort=${Sorting.Ascending}`}
              className={`hover:text-[#6F11E1] hover:font-medium 
            cursor-pointer flex flex-row text-sm leading-4 font-normal   ${
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
        <div className="pt-2 md:grid md:grid-cols-4 max-sm:grid grid-cols-2">
          <ProductsList products={products} loading={productsLoading} />
        </div>
      </div>
    </Layout>
  );
}
const HomePageHoc = WithGuard(HomePage, TGuard.LoggedIn);

export { HomePageHoc as HomePage };
