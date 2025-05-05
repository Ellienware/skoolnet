import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h2>Students</h2>
      <Button asChild>
        <Link href="/dashboard/students/add-student">Add Student</Link>
      </Button>
    </div>
  )
}
