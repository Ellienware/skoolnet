"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Controller } from "react-hook-form";
import type { ActionMeta, SingleValue, CSSObjectWithLabel, ControlProps } from "react-select";
import type { Props as SelectProps } from "react-select";
import { OptionType } from "./MultiSelectInput";
import AddNewButton from "./AddNewButton";

// Type for the dynamic import
type SelectType<T> = React.ComponentType<SelectProps<T>>;

// Dynamically import Select with type
const Select = dynamic(() =>
  import("react-select").then((mod) => mod.default as SelectType<OptionType>)
, { ssr: false });

type FormSelectInputProps = {
  control: any;
  name: string;
  label: string;
  options: readonly OptionType[];
  errors?: any;
  toolTipText?: string;
  href?: string;
  labelShown?: boolean;
};

export default function FormSelectInput({
  options,
  label,
  control,
  errors,
  name,
  toolTipText,
  href,
  labelShown = true,
}: FormSelectInputProps) {
  return (
    <div className="mb-4 w-full">
      {labelShown && (
        <label className="block text-sm font-medium text-gray-900 mb-2">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            options={options}
            value={options.find((option) => option.value === field.value) || null}
            onChange={(newValue) => {
              const typedValue = newValue as SingleValue<OptionType>;
              field.onChange(typedValue?.value ?? "");
            }}
            className="basic-single"
            classNamePrefix="select"
            placeholder="Select an option"
            styles={{
              container: (base: CSSObjectWithLabel) => ({
                ...base,
                width: "100%",
              }),
              control: (base: CSSObjectWithLabel, state: ControlProps<OptionType>) => ({
                ...base,
                minHeight: "50px",
                height: "auto",
                width: "100%",
                borderColor: state.isFocused ? "#6366f1" : base.borderColor,
                boxShadow: state.isFocused ? "0 0 0 1px #6366f1" : base.boxShadow,
                "&:hover": {
                  borderColor: "#6366f1",
                },
              }),
              valueContainer: (base: CSSObjectWithLabel) => ({
                ...base,
                padding: "0 10px",
              }),
              dropdownIndicator: (base: CSSObjectWithLabel) => ({
                ...base,
                color: "#6366f1",
                padding: "4px",
                "&:hover": {
                  color: "#4C51BF",
                },
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
            }}
          />
        )}
      />

      {errors?.[name] && (
        <span className="text-xs text-red-600 mt-1 block">
          {errors[name]?.message}
        </span>
      )}

      {href && toolTipText && (
        <AddNewButton toolTipText={toolTipText} href={href} />
      )}
    </div>
  );
}
