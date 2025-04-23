import Image from "next/image";
import SectionHeader from "./section-header";
import {
  BookOpen,
  Bus,
  ClipboardList,
  DollarSign,
  GraduationCap,
  MessageSquare,
  Users,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const features = [
  {
    title: "Student Management",
    description:
      "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
    href: "/features/student-management",
    icon: Users,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
    href: "/features/academic-management",
    icon: GraduationCap,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Communication Hub",
    description:
      "Integrated messaging system with multi-channel notifications for seamless school-wide communication",
    href: "/features/communication",
    icon: MessageSquare,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Financial Management",
    description:
      "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
    href: "/features/finance",
    icon: DollarSign,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Staff Management",
    description:
      "Efficient tools for managing staff records, attendance, performance evaluation, and payroll processing",
    href: "/features/staff-management",
    icon: ClipboardList,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Transport Management",
    description:
      "Real-time transport tracking, route management, and automated notifications for safe student transportation",
    href: "/features/transport",
    icon: Bus,
    image: "/images/placeholder.jpg",
  },
  {
    title: "Resource Management",
    description:
      "Digital library system, inventory tracking, and facility scheduling in one integrated platform",
    href: "/features/resources",
    icon: BookOpen,
    image: "/images/placeholder.jpg",
  },
];

export default function GridFeatures() {
  return (
    <section className="py-16 px-4 bg-white">
      <SectionHeader
        title="Features"
        heading="All-in-One School Management Platform"
        description="Streamline operations, enhance communication, and drive student success with our comprehensive school management platform designed for the modern educational institution."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <feature.icon className="w-5 h-5 text-primary" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{feature.description}</p>
              <div className="relative w-full h-48 rounded-md overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
