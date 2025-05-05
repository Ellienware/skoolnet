import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, UsersRound } from "lucide-react"
import SingleStudentForm from "@/components/dashboard/forms/students/student-form"
import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form"

export default function StudentAdmissionTabs() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Student Admission Portal</h1>

      <Tabs defaultValue="single" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger
            value="single"
            className="flex items-center justify-center gap-2 py-3 rounded-md data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-colors hover:bg-indigo-100"
          >
            <UserPlus className="h-4 w-4" />
            <span>Single Student Admission</span>
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="flex items-center justify-center gap-2 py-3 rounded-md data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-colors hover:bg-indigo-100"
          >
            <UsersRound className="h-4 w-4" />
            <span>Bulk Student Admission</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="single" className="mt-0">
          <Card>
            <CardHeader className="pb-4">
              <CardDescription>Add a new student to the system individually with complete details.</CardDescription>
            </CardHeader>
            <CardContent>
              <SingleStudentForm/>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bulk" className="mt-0">
          <Card>
            <CardHeader className="pb-4">
              <CardDescription>Import multiple students at once using a spreadsheet or CSV file.</CardDescription>
            </CardHeader>
            <CardContent>
              <BulkStudentForm/>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

