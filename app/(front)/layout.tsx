import SiteHeader from '@/components/site-header'
import React, { ReactNode } from 'react'

const Frontlayout = ({children}:{children : ReactNode}) => {
  return (
    <div>
        <SiteHeader />
        {children}
    </div>
  )
}

export default Frontlayout