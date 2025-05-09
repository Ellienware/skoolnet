import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function HelpHeader() {
  return (
    <div className="py-12 text-center space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">School Management System Help Center</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Find answers, tutorials, and support for all features of your school management system.
      </p>
      <div className="max-w-xl mx-auto relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for help with any feature..." className="pl-10 h-12 text-base" />
        <Button className="absolute right-1 top-1 h-10">Search</Button>
      </div>
    </div>
  )
}

