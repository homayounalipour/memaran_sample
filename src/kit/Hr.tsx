export type HrProps = {
  className?: string;
};
export function Hr(props: HrProps) {
  const { className } = props;
  return <div className={`border ${className}`} />;
}
