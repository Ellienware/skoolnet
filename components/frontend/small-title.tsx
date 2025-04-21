import React from 'react';

const SmallTitle = ({title}:{title:string}) => {
  return (
    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm font-medium rounded-full border border-gray-200 bg-white">
          <svg
            className="w-4 h-4 mr-2 text-rose-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          {title}
        </div>
  )
}

export default SmallTitle;