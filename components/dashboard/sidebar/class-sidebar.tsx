"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import type { ClassData } from "@/lib/types"
import { Users, PlusCircle, Edit, Trash2, Search } from "lucide-react"
import ClassForm from "../forms/academics/class-form"

interface ClassSidebarProps {
  classes: ClassData[]
  selectedClassId: string
  onSelectClass: (classId: string) => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function ClassSidebar({
  classes,
  selectedClassId,
  onSelectClass,
  searchQuery = "",
  onSearchChange = () => {},
}: ClassSidebarProps) {
  return (
    <div className="w-full md:w-64 border-r bg-white dark:bg-gray-800 flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-xl font-bold">Classes</h2>
        <ClassForm/>
      </div>

      {/* Search input */}
      <div className="p-2 border-b">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search classes..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {classes.map((cls) => (
            <div key={cls.id} className="group mb-1 rounded-md hover:bg-muted/50">
              {/* Custom layout with three distinct areas */}
              <div className="flex items-center p-2">
                {/* Class name and icon */}
                <div
                  className={`flex items-center flex-grow cursor-pointer ${
                    selectedClassId === cls.id ? "text-primary font-medium" : ""
                  }`}
                  onClick={() => onSelectClass(cls.id)}
                >
                  <Users className="mr-2 h-4 w-4" />
                  <span>Class {cls.name}</span>
                </div>

                {/* Section count badge */}
                <div className="flex-shrink-0 mr-2">
                  <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                    {cls.sections.length}
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-7 w-7" title="Edit Class">
                    <Edit className="h-3.5 w-3.5" />
                    <span className="sr-only">Edit Class</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" title="Delete Class">
                    <Trash2 className="h-3.5 w-3.5" />
                    <span className="sr-only">Delete Class</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

