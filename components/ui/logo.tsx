import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = ({variant="light"}:{variant?:"dark" | "light"}) => {
  if(variant === "light"){
    return (
      <Link href={"/"} className="flex items-center space-x-2">
              <div className="bg-violet-500 rounded-full p-1">
                  <span className="text-white font-bold text-xl"><BookOpen/></span>
              </div>
              <span className="font-bold text-xl">Skool<span className='text-violet-500'>Net</span></span>
      </Link>
    )
  }else{
    return (
      <Link href={"/"} className="flex items-center space-x-2">
              <div className="bg-white rounded-full p-1">
                  <span className="text-blue-800 font-bold text-xl"><BookOpen/></span>
              </div>
              <span className="font-bold text-xl">Skool<span className='text-violet-50'>Net</span></span>
      </Link>
)
  }
  
}

export default Logo