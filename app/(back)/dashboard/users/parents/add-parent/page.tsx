import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, UsersRound } from "lucide-react"
import SingleStudentForm from "@/components/dashboard/forms/students/student-form"
import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form"

export default function StudentAdmissionTabs() {
  return (
    <div className="w-full max-w-5xl mx-auto py-6">
          <Card className="border-t-4 border-indigo-600 shadow">
            <CardContent className="p-6">
              <SingleStudentForm/>
            </CardContent>
          </Card>
    </div>
  )
}

