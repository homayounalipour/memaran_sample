import { Header } from "../component/Header";
export type LayOutProps = {
  children: JSX.Element | JSX.Element[];
};

export function LayOut(props: LayOutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
