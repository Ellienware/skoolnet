import type { Props as SelectProps } from 'react-select';
import dynamic from 'next/dynamic';
import React from "react";
import { Controller } from "react-hook-form";
const Select = dynamic<SelectProps<any>>(  
    () => import('react-select').then((mod) => mod.default),
    { ssr: false }
);

export type OptionType = {
    value: string;
    label: string;
};

type MultiSelectInputProps<T extends string> = {
  control: any;
  errors: any;
  name: T;
  label: string;
  options: OptionType[];
};

export default function MultiSelectInput<T extends string>({
  control,
  errors,
  name,
  label,
  options,
}: MultiSelectInputProps<T>) {
  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            options={options}
            isMulti
            value={options.filter((option) => value?.includes(option.value))}
            onChange={(selectedOptions: readonly OptionType[] | null) =>
                onChange(selectedOptions ? selectedOptions.map((option) => option.value) : [])
              }
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select features..."
            styles={{
              container: (base) => ({
                ...base,
                width: "100%",
              }),
              control: (base, state) => ({
                ...base,
                minHeight: '50px',
                height: 'auto',
                width: "100%",
                borderColor: state.isFocused ? '#6366f1' : base.borderColor,
                boxShadow: state.isFocused ? '0 0 0 1px #6366f1' : base.boxShadow,
                '&:hover': {
                  borderColor: '#6366f1',
                },
                flexWrap: "wrap",
                overflow: 'hidden',
              }),
              valueContainer: (base) => ({
                ...base,
                flexWrap: 'wrap',
                overflow: 'visible',
                paddingBottom: '4px',
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: '#eef2ff',
                color: '#6366f1',
              }),
              input: (base) => ({
                ...base,
                width: "auto",
                minWidth: "50px",
              }),
              // Custom dropdown arrow styles
              dropdownIndicator: (base) => ({
                ...base,
                color: '#6366f1', // Change arrow color
                padding: '4px', // Adjust padding for the arrow
                '&:hover': {
                  color: '#4C51BF', // Change color on hover
                },
              }),
              indicatorSeparator: () => ({
                display: 'none', // Hide the separator between the indicator and control
              }),
            }}
          />
        )}
      />

      {errors[name]?.message && (
        <span className="text-xs text-red-600 mt-1 block">{errors[name].message}</span>
      )}
    </div>
  );
}
