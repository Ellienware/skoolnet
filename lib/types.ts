export interface TopPerformer {
    id: string
    name: string
    gpa: number
    photo?: string
  }
  
  export interface Section {
    id: string
    name: string
    studentCount: number
    boyCount: number
    girlCount: number
    averageGPA: number
    classTeacher: string
    topPerformer?: TopPerformer
  }
  
  export interface ClassData {
    id: string
    name: string
    sections: Section[]
  }
  