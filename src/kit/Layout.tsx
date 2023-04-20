import { Header } from "../component/Header";
import { AppLoading } from "../component/AppLoading";
export type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  loading?: boolean;
};

export function Layout(props: LayoutProps) {
  const { children, loading } = props;
  return loading ? (
    <AppLoading />
  ) : (
    <>
      <Header />
      {children}
    </>
  );
}
