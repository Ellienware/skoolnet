import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Section } from "@/lib/types"
import { Users, Trophy, Star, Edit, Trash2 } from "lucide-react"

interface SectionDetailsProps {
  section: Section
  className: string
}

export function SectionDetails({ section, className }: SectionDetailsProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="bg-primary/5 pb-2">
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="font-bold text-lg">
            {className}
            {section.name}
          </Badge>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              <span>{section.studentCount} Students</span>
            </div>
            <div className="flex">
              <Button variant="ghost" size="icon" className="h-7 w-7" title="Edit Section">
                <Edit className="h-3.5 w-3.5" />
                <span className="sr-only">Edit Section</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" title="Delete Section">
                <Trash2 className="h-3.5 w-3.5" />
                <span className="sr-only">Delete Section</span>
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">Class Teacher</div>
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={section.classTeacher} />
                <AvatarFallback>
                  {section.classTeacher
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span>{section.classTeacher}</span>
            </div>
          </div>

          {section.topPerformer && (
            <div>
              <div className="flex items-center text-sm font-medium text-muted-foreground mb-1">
                <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
                <span>Top Performer</span>
              </div>
              <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded-md">
                <Avatar className="h-10 w-10 mr-2 border-2 border-yellow-300">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={section.topPerformer.name} />
                  <AvatarFallback>
                    {section.topPerformer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{section.topPerformer.name}</div>
                  <div className="text-xs flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500 fill-yellow-500" />
                    <span>GPA: {section.topPerformer.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 text-xs text-muted-foreground">
        <div className="flex justify-between w-full">
          <span>Boys: {section.boyCount}</span>
          <span>Girls: {section.girlCount}</span>
          <span>Avg. GPA: {section.averageGPA.toFixed(2)}</span>
        </div>
      </CardFooter>
    </Card>
  )
}


