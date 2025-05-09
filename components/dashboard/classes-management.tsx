"use client"

import { useState } from "react"
import type { ClassData } from "@/lib/types"
import { sampleClassData } from "@/lib/sample-data"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClassSidebar } from "./sidebar/class-sidebar"
import StreamForm from "./forms/academics/stream-form"
import { SectionDetails } from "./section-details"

export function ClassManagement() {
  const [classes] = useState<ClassData[]>(sampleClassData)
  const [selectedClassId, setSelectedClassId] = useState<string>(classes[0]?.id || "")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter classes based on search query
  const filteredClasses = searchQuery
    ? classes.filter((cls) => cls.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : classes

  const selectedClass = classes.find((cls) => cls.id === selectedClassId)

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <ClassSidebar
        classes={filteredClasses}
        selectedClassId={selectedClassId}
        onSelectClass={setSelectedClassId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        {selectedClass ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Class {selectedClass.name} Sections</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{selectedClass.sections.length} Sections</span>
                <StreamForm/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedClass.sections.map((section) => (
                <SectionDetails key={section.id} section={section} className={selectedClass.name} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Select a class to view its sections</p>
          </div>
        )}
      </div>
    </div>
  )
}

