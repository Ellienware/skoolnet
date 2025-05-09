"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ArrowRight, Clock, BookOpen, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample article data aligned with sidebar structure
const articles = [
  {
    id: 1,
    title: "Getting Started with the School Management System",
    description: "Learn the basics of our platform and how to navigate the dashboard.",
    category: "dashboard",
    readTime: "5 min read",
    popular: true,
  },
  {
    id: 2,
    title: "Managing Student Records",
    description: "A comprehensive guide to adding, editing, and managing student information.",
    category: "student-management",
    readTime: "8 min read",
    popular: true,
  },
  {
    id: 3,
    title: "Setting Up Class Streams and Sections",
    description: "Learn how to create and manage classes, streams, and sections.",
    category: "academics",
    readTime: "6 min read",
    popular: true,
  },
  {
    id: 4,
    title: "Student Attendance Tracking",
    description: "How to record, track, and generate reports for student attendance.",
    category: "student-management",
    readTime: "7 min read",
    popular: false,
  },
  {
    id: 5,
    title: "Managing School Fees and Payments",
    description: "A guide to setting up fee structures, processing payments, and generating receipts.",
    category: "finance",
    readTime: "10 min read",
    popular: true,
  },
  {
    id: 6,
    title: "Creating and Managing Timetables",
    description: "Learn how to create, edit, and publish class timetables.",
    category: "academics",
    readTime: "8 min read",
    popular: false,
  },
  {
    id: 7,
    title: "Staff Management and Attendance",
    description: "How to manage staff records, track attendance, and process leave requests.",
    category: "staff-management",
    readTime: "9 min read",
    popular: false,
  },
  {
    id: 8,
    title: "Setting Up Transport Routes",
    description: "Guide to creating bus routes, assigning vehicles, and managing drivers.",
    category: "transport",
    readTime: "7 min read",
    popular: false,
  },
  {
    id: 9,
    title: "Generating Report Cards",
    description: "Step-by-step guide to creating and publishing student report cards.",
    category: "academics",
    readTime: "8 min read",
    popular: true,
  },
  {
    id: 10,
    title: "Communication Tools for Schools",
    description: "How to use announcements, messaging, and notice board features.",
    category: "communication",
    readTime: "6 min read",
    popular: true,
  },
  {
    id: 11,
    title: "Managing Library Resources",
    description: "Guide to cataloging books, managing borrowing, and tracking returns.",
    category: "resources",
    readTime: "7 min read",
    popular: false,
  },
  {
    id: 12,
    title: "Generating Academic Reports",
    description: "How to create and analyze various academic performance reports.",
    category: "reports",
    readTime: "9 min read",
    popular: false,
  },
]

const categories = [
  { id: "all", name: "All Articles" },
  { id: "dashboard", name: "Dashboard" },
  { id: "student-management", name: "Student Management" },
  { id: "academics", name: "Academics" },
  { id: "staff-management", name: "Staff Management" },
  { id: "finance", name: "Finance" },
  { id: "transport", name: "Transport" },
  { id: "communication", name: "Communication" },
  { id: "resources", name: "Resources" },
  { id: "reports", name: "Reports & Analytics" },
]

export function ArticlesSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter articles based on search query and active category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || article.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="articles" className="scroll-mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Help Articles</h2>
          <p className="text-muted-foreground mt-1">Browse our collection of helpful guides</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">
                        {categories.find((c) => c.id === article.category)?.name || article.category}
                      </Badge>
                      {article.popular && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-between">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium">No articles found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
