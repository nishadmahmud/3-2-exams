"use client";

import { useState } from 'react';

export default function AnswerDropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-2 mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold text-[var(--dark)] cursor-pointer hover:text-blue-600 transition-colors focus:outline-none flex items-center gap-2"
      >
        <span>Show Answer</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-r-md text-sm text-gray-700 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}
