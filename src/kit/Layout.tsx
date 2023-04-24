import { Header } from "../component/Header";
import { AppLoading } from "../component/AppLoading";
import { MobileHeader } from "../component/MobileHeader";
import { MobileFooter } from "../component/MobileFooter";
export type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  loading?: boolean;
  hasFooter?: boolean;
};

export function Layout(props: LayoutProps) {
  const { children, loading, hasFooter } = props;
  return loading ? (
    <AppLoading />
  ) : (
    <>
      <div className="lg:block hidden">
        <Header />
      </div>
      <MobileHeader />
      {children}
      {hasFooter ? (
        <>
          <div className="md:hidden">
            <MobileFooter />
          </div>
        </>
      ) : null}
    </>
  );
}
