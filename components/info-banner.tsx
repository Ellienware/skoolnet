"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils"; // If you don't have this, use regular className logic

type BannerProps = {
  message: string;
  type?: "info" | "success";
};

export default function Banner({ message, type = "info" }: BannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const baseStyles = "py-2 px-4 mb-3 rounded-md flex items-center justify-between shadow-md";
  const typeStyles = {
    info: "bg-blue-100 text-blue-800 border border-blue-200",
    success: "bg-green-100 text-green-800 border border-green-200",
    warning: "bg-orange-100 text-orange-800 border border-orange-200",
    danger: "bg-red-100 text-red-800 border border-red-200",
  };

  return (
    <div className={cn(baseStyles, typeStyles[type])}>
      <span>{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-xl text-inherit hover:opacity-70"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
