import ContactUs from '@/components/frontend/contact-us'
import SectionHeader from '@/components/frontend/section-header'
import React from 'react'

export default function ContactUsPage() {
  return (
    <div className='py-16'>
      <div className="p-6">
        <SectionHeader
                title="Features"
                heading="All-in-One School Management Platform"
                description="Streamline operations, enhance communication, and drive student success with our comprehensive school management platform designed for the modern educational institution."
              />
      </div>
      <ContactUs/>
    </div>
  )
}