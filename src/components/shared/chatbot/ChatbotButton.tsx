"use client"
import React from 'react';

interface ChatbotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatbotButton({ onClick, isOpen }: ChatbotButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#800000] text-white rounded-full shadow-lg hover:bg-[#660000] transition-all duration-200 flex items-center justify-center z-50"
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      <div className="relative">
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap text-[#800000] text-sm font-medium">
            Need Help? 👋
          </div>
        )}
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </div>
    </button>
  );
} 