"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./section-header";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPricing = {
    price: 1499,
    currency: "R"
  };
  
  // Apply 15% annual discount
  const annualPricing = {
    price: Math.round(monthlyPricing.price * 12 * 0.85),
    currency: "R"
  };

  const features = [
    "Student Information System",
    "Academic Management",
    "Financial Administration",
    "Communication Hub",
    "Mobile App Access",
    "Data Backup & Security",
    "Email Support"
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
            <SectionHeader title="Pricing" heading="Transparent, Value-Based Pricing" description="Get started with our comprehensive school management system at an affordable price. 
            Choose the billing cycle that works best for your institution's budget."/>
        </div>
        <div className="mx-auto mt-8 flex justify-center space-x-4">
          <Button
            variant={isAnnual ? "outline" : "default"}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(true)}
          >
            Annually (Save 15%)
          </Button>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {isAnnual ? "Annual" : "Monthly"} Standard Plan
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Perfect for small to medium-sized schools looking to streamline administration, 
              enhance communication, and improve student performance tracking with our all-in-one solution.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-xl font-semibold leading-6 text-indigo-600">
                Core Features Included
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {isAnnual ? "Annual subscription (best value)" : "Flexible monthly plan"}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {isAnnual ? annualPricing.currency : monthlyPricing.currency}
                    {isAnnual ? annualPricing.price.toLocaleString() : monthlyPricing.price.toLocaleString()}
                  </span>
                  {!isAnnual && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /month
                    </span>
                  )}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {isAnnual ? "Billed annually" : "Billed monthly"}
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started Now
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  30-day free trial available. Upgrade to Professional or Enterprise plans for additional features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}