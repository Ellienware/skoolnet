import { BookOpen, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
        <Link href={"/"} className="flex items-center space-x-2">
                <div className="bg-blue-500 rounded-full p-1">
                <span className="text-white font-bold text-xl"><BookOpen/></span>
                </div>
                <span className="font-bold text-xl">Skool<span className='text-blue-500'>Net</span></span>
        </Link>
  )
}

export default Logo