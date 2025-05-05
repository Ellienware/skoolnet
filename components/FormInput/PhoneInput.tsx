"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";

type PhoneInputProps<T extends string> = {
    register: any,
    control: any;
    errors: any;
    name: T;
    label: string;
    placeholder?: string;
    toolTipText?: string;
    icon?: React.ComponentType<{ className?: string }>;
};

export default function PhoneInputField<T extends string>({
  control,
  errors,
  name,
  label,
  placeholder,
  toolTipText,
  icon: Icon,
}: PhoneInputProps<T>) {
  return (
    <div className="mb-4 w-full">
      <div className="flex items-center space-x-2 mb-1">
        <label htmlFor={name} className="text-sm font-medium text-gray-900">
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button">
                  <CircleHelp className="w-4 h-4 text-gray-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <div className="relative">
            {Icon && (
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icon className="w-4 h-4 text-gray-400" />
              </div>
            )}

            <PhoneInput
              international
              defaultCountry="ZA"
              value={value}
              onChange={onChange}
              countryCallingCodeEditable={false}
              placeholder={placeholder || "712 345 678"}
              className={cn(
                "block w-full rounded-md border border-gray-300 bg-white py-4 pl-10 pr-3 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",
                errors[name] && "border-red-500 focus:ring-red-500"
              )}
              ref={ref}
            />
          </div>
        )}
      />

      {/* Error Message */}
      {errors[name]?.message && (
        <p className="text-xs text-red-600 mt-1">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

