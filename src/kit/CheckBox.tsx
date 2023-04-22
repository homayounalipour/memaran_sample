export type CheckBoxProps<T> = {
  id: string;
  value: T;
  name: string;
  checked?: boolean;
  onChange?: (e: any) => void;
};

export const CheckBox = <T extends any>(props: CheckBoxProps<T>) => {
  const { checked, id, name, value, onChange } = props;

  return (
    <label htmlFor={id}>
      <input
        id={id}
        name={name}
        value={value as any}
        type="radio"
        checked={checked}
        className="checked: accent-[#EE5325]"
        onChange={onChange}
      />
    </label>
  );
};
