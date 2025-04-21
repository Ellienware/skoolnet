import React from 'react';
import SmallTitle from './small-title';

export default function SectionHeader({title, heading, description}:{title:string, heading:string, description:string}) {
  return (
    <div className="container max-w-6xl mx-auto text-center mb-16">
        <SmallTitle title={title} />
        <h2 className="text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
    </div>
  )
}
