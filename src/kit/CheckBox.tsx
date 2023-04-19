export type CheckBoxProps = {
  checked?: boolean;
  onChange?: (e: any) => void;
};

export const CheckBox = (props: CheckBoxProps) => {
  const { checked, onChange } = props;

  return (
    <label htmlFor="checkbox">
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};
