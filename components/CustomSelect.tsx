import React from "react";
import { Listbox } from "@headlessui/react";
//👇 generic type for select option
export type CustomSelectOption<T> = {
  label: string;
  value: T;
};

//👇 generic props
export type CustomSelect<T> = {
  options: CustomSelectOption<T>[];
  value: T;
  onChange(value: T): void;
};

//👇 generic select component
const CustomSelect = <T,>(props: CustomSelect<T>) => {
  const options = props.options;
  const selectedItem = options.find((o) => o.value === props.value);
  const label = selectedItem?.label ?? "Select Option...";
  return (
    <Listbox value={props.value} onChange={props.onChange}>
      <Listbox.Button>{label}</Listbox.Button>
      <Listbox.Options>
        {options.map((option, i) => (
          <Listbox.Option key={i} value={option.value}>
            {option.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default CustomSelect;
