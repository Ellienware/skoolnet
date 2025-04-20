import Image from "next/image"
import SmallTitle from "./small-title"
import SectionHeader from "./section-header"
import { BookOpen, Bus, ClipboardList, DollarSign, GraduationCap, MessageSquare, Users } from "lucide-react"

const features = [
  {
    title: "Student Management",
    description:
      "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
    href: "/features/student-management",
    icon: Users,
    image : '/images/placeholder.jpg',
  },
  {
    
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
    href: "/features/academic-management",
    icon: GraduationCap,
    image : '/images/placeholder.jpg',
  },
  {
    title: "Communication Hub",
    description:
      "Integrated messaging system with multi-channel notifications for seamless school-wide communication",
    href: "/features/communication",
    icon: MessageSquare,
    image : '/images/placeholder.jpg',
    
  },
  {
    title: "Financial Management",
    description:
      "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
    href: "/features/finance",
    icon: DollarSign,
    image : '/images/placeholder.jpg',
  },
  {
    title: "Staff Management",
    description:
      "Efficient tools for managing staff records, attendance, performance evaluation, and payroll processing",
    href: "/features/staff-management",
    icon: ClipboardList,
    image : '/images/placeholder.jpg',
  },
  {
    title: "Transport Management",
    description:
      "Real-time transport tracking, route management, and automated notifications for safe student transportation",
    href: "/features/transport",
    icon: Bus,
    image : '/images/placeholder.jpg',
  },
  {
    title: "Resource Management",
    description:
      "Digital library system, inventory tracking, and facility scheduling in one integrated platform",
    href: "/features/resources",
    icon: BookOpen,
    image : '/images/placeholder.jpg',
  },
]
export default function GridFeatures() {
  return (
    <section className="py-16 px-4 bg-white">
     <SectionHeader 
     title="Features" 
     heading="All-in-One School Management Platform" 
     description="Streamline operations, enhance communication, 
     and drive student success with our comprehensive 
     school management platform designed for the modern educational institution."/>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* AI Video Editing Card */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{features[0].title}</h3>
            <p className="text-gray-600 text-sm">
              {features[0].description}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg mx-4 mb-4">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div >
              </div>
              <div className="relative aspect-video">
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  width={500}
                  height={300}
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 flex p-2 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border-l-2 border-r-2 border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 flex justify-between">
                <div className="flex space-x-2">
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
                  </div>
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                    <div className="w-3 h-3 border-t-2 border-gray-400 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Video Generation Card */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{features[1].title}</h3>
            <p className="text-gray-600 text-sm">
              {features[1].description}
            </p>
          </div>
          <div className="p-2">
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  width={500}
                  height={300}
                  className="rounded w-full"
                />
          </div>
       
        </div>
      </div>
    </section>
  )
}
