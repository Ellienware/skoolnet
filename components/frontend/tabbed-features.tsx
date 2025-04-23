"use client"

import { useState } from "react"
import { Users, GraduationCap, DollarSign, MessageSquare, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import SectionHeader from "./section-header"

const features = [
  {
    icon: Users,
    tab: "Students",
    title: "Student Management",
    description:
      "Comprehensive student information system for managing enrollments, profiles, and academic records with ease.",
    href: "/features/student-management",
    subfeatures: [
      "Student enrollment & profiles",
      "Class assignments & transfers",
      "Guardian and emergency contact info",
      "Academic records & history",
      "Student document uploads",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: GraduationCap,
    tab: "Academics",
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading, and report card generation in one unified system.",
    href: "/features/academic-management",
    subfeatures: [
      "Curriculum & subject setup",
      "Grading scales & mark sheets",
      "Timetable scheduling",
      "Exam planning & result generation",
      "Student performance analytics",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: DollarSign,
    tab: "Finance",
    title: "Financial Management",
    description:
      "Complete fee management system with online payments, invoicing, and comprehensive financial reporting.",
    href: "/features/finance",
    subfeatures: [
      "Fee structure configuration",
      "Online payments & receipts",
      "Invoicing & reminders",
      "Scholarships & discounts",
      "Financial reports & ledgers",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: MessageSquare,
    tab: "AI Study Guide",
    title: "AI Study Guide",
    description: 
      "An interactive AI-powered study guide feature powered by ChatGPT, designed to help students learn better by providing detailed explanations, answering questions, summarizing study materials, and offering personalized quizzes and practice questions.",
    href: "/features/ai-study-guide",
    subfeatures: [
      "Ask any subject-related questions",
      "Get simplified explanations for complex topics",
      "Generate personalized quizzes and practice questions",
      "Study tips and time management advice",
    ],
    image: "/images/placeholder.jpg",
  },
]

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
         <SectionHeader
                title="Additional Features"
                heading="All-in-One School Management Platform"
                description="Streamline operations, enhance communication, and drive student success with our comprehensive school management platform designed for the modern educational institution."
              />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-full transition-all",
                activeTab === index
                  ? "bg-white shadow-md text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-white/50 hover:text-gray-900"
              )}
              onClick={() => setActiveTab(index)}
            >
              <feature.icon className="w-5 h-5" />
              <span>{feature.tab}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <img
                src={features[activeTab].image}
                alt={features[activeTab].title}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div>
                <div className="inline-flex items-center justify-center p-2 bg-gray-100 rounded-xl mb-2">
                  {(() => {
                    const ActiveIcon = features[activeTab].icon;
                    return <ActiveIcon className="w-6 h-6 text-gray-700" />;
                  })()}
                </div>
                <h2 className="text-4xl font-bold tracking-tight">{features[activeTab].title}</h2>
                <p className="text-gray-600 text-lg mt-2">{features[activeTab].description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features[activeTab].subfeatures.map((subfeature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="rounded-full bg-green-50 p-1 mt-0.5 flex-shrink-0">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{subfeature}</span>
                </div>
              ))}
            </div>

            <Button className="group" size="lg" asChild>
              <a href={features[activeTab].href} className="inline-flex items-center gap-2">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Content - Feature Visualization */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-xl opacity-20"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-6">
                <img
                  src={features[activeTab].image || "/placeholder.svg"}
                  alt={features[activeTab].title}
                  className="w-full h-auto rounded-lg"
                />

                <div className="mt-6 flex flex-wrap gap-2">
                  {features[activeTab].subfeatures.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {feature.split(" ")[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
