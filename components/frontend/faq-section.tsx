
"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

// Sample FAQ data aligned with sidebar structure
const faqs = [
  {
    id: "faq-1",
    question: "How do I add a new student to the system?",
    answer:
      "To add a new student, navigate to Student Management > Student Directory and click the 'Add Student' button. Fill in the required information in the form, including personal details, parent/guardian information, and class assignment. Upload a photo if available, then click 'Save' to add the student to the system.",
    category: "student-management",
  },
  {
    id: "faq-2",
    question: "How do I create a new class or section?",
    answer:
      "To create a new class or section, go to Academics > Classes & Streams. Click on 'Add Class' to create a new class, or select an existing class and click 'Add Section' to create a new section within that class. Fill in the required details such as class name, section identifier, class teacher, and maximum capacity, then save your changes.",
    category: "academics",
  },
  {
    id: "faq-3",
    question: "How do I record student attendance?",
    answer:
      "To record student attendance, navigate to Student Management > Attendance. Select the class and section, then choose the date for attendance. You'll see a list of all students in that section. Mark each student as present, absent, or late, add any notes if needed, and click 'Save Attendance' when finished.",
    category: "student-management",
  },
  {
    id: "faq-4",
    question: "How do I set up fee structures for different classes?",
    answer:
      "To set up fee structures, go to Finance > Fee Management and click 'Create Fee Structure'. Select the academic year and class, then add fee components (tuition, library, sports, etc.) with their respective amounts and due dates. You can create different structures for different classes or apply the same structure to multiple classes.",
    category: "finance",
  },
  {
    id: "faq-5",
    question: "How do I generate report cards?",
    answer:
      "To generate report cards, navigate to Academics > Report Cards. Select the class, section, and term/semester. Enter marks for each student across different subjects, or import them from the examination module. Add teacher comments, calculate grades, and then click 'Generate Report Cards'. You can preview, print, or email the report cards to parents.",
    category: "academics",
  },
  {
    id: "faq-6",
    question: "How do I set up a school bus route?",
    answer:
      "To set up a bus route, go to Transport > Routes and click 'Add New Route'. Name the route and add stops in sequence, specifying pickup/drop-off times for each stop. Assign a vehicle and driver to the route, then add students who will use this route. You can view the route on a map and make adjustments as needed.",
    category: "transport",
  },
  {
    id: "faq-7",
    question: "How do I send an announcement to parents?",
    answer:
      "To send an announcement to parents, navigate to Communication > Announcements and click 'Create Announcement'. Write your message, select the recipient groups (all parents, specific classes, etc.), add any attachments, and schedule when to send it. You can also choose delivery methods (app notification, email, SMS) before sending.",
    category: "communication",
  },
  {
    id: "faq-8",
    question: "How do I track staff attendance?",
    answer:
      "To track staff attendance, go to Staff Management > Attendance. Select the date and view the list of all staff members. Mark each staff member as present, absent, or on leave. You can also record arrival and departure times if needed. The system automatically calculates attendance statistics for reporting purposes.",
    category: "staff-management",
  },
  {
    id: "faq-9",
    question: "How do I generate financial reports?",
    answer:
      "To generate financial reports, navigate to Reports & Analytics > Financial Reports. Select the report type (fee collection, expenses, balance sheet, etc.) and specify the time period. Apply any filters as needed, then click 'Generate Report'. You can view the report online, export it to Excel/PDF, or print it directly from the system.",
    category: "finance",
  },
  {
    id: "faq-10",
    question: "How do I manage library books and borrowing?",
    answer:
      "To manage library books, go to Resources > Library. You can add new books with details like title, author, ISBN, and category. To manage borrowing, select a student, scan or search for the book, set a return date, and click 'Issue Book'. When books are returned, find the borrowing record and click 'Mark as Returned'.",
    category: "resources",
  },
  {
    id: "faq-11",
    question: "How do I create a school timetable?",
    answer:
      "To create a timetable, navigate to Academics > Timetable and click 'Create New Timetable'. Select the class and section, then use the grid interface to assign subjects, teachers, and periods for each day of the week. You can copy timetables between sections, check for teacher conflicts, and publish the final timetable for students and teachers to view.",
    category: "academics",
  },
  {
    id: "faq-12",
    question: "How do I process a student's leave application?",
    answer:
      "To process a student's leave application, go to Student Management > Attendance > Leave Applications. You'll see a list of pending applications. Open the application to view details, including reason and supporting documents. You can approve or reject the application, add comments, and the system will automatically update the student's attendance records accordingly.",
    category: "student-management",
  },
]

const categories = [
  { id: "all", name: "All FAQs" },
  { id: "student-management", name: "Student Management" },
  { id: "academics", name: "Academics" },
  { id: "staff-management", name: "Staff Management" },
  { id: "finance", name: "Finance" },
  { id: "transport", name: "Transport" },
  { id: "communication", name: "Communication" },
  { id: "resources", name: "Resources" },
  { id: "reports", name: "Reports & Analytics" },
]

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter FAQs based on search query and category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="faq" className="scroll-mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-1">Find quick answers to common questions</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search FAQs..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="mb-6 flex flex-wrap h-auto bg-transparent p-0 gap-2">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 text-sm"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeCategory} className="mt-0">
          {filteredFaqs.length > 0 ? (
            <Accordion type="multiple" className="w-full">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <h3 className="text-xl font-medium">No FAQs found</h3>
              <p className="text-muted-foreground mt-1">Try adjusting your search to find what you're looking for.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  )
}
