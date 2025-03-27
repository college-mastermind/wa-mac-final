import React from 'react';
import { ChatbotAvatarProps } from './types';

export default function ChatbotAvatar({ size = 'md', showStatus = false }: ChatbotAvatarProps) {
  const dimensions = {
    sm: 'w-6 h-6 xs:w-8 xs:h-8',
    md: 'w-8 h-8 xs:w-10 xs:h-10'
  };

  return (
    <div className={`relative ${dimensions[size]}`}>
      <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle */}
          <circle cx="40" cy="40" r="40" fill="#8B0000" />
          
          {/* Inner Circle Pattern */}
          <circle cx="40" cy="40" r="35" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
          <circle cx="40" cy="40" r="30" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
          
          {/* Robot Head Shape */}
          <path
            d="M30 25H50C52.7614 25 55 27.2386 55 30V45C55 47.7614 52.7614 50 50 50H30C27.2386 50 25 47.7614 25 45V30C25 27.2386 27.2386 25 30 25Z"
            fill="white"
          />
          
          {/* Eyes */}
          <circle cx="35" cy="35" r="3" fill="#8B0000" />
          <circle cx="45" cy="35" r="3" fill="#8B0000" />
          
          {/* Antenna */}
          <path
            d="M40 20V15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="40" cy="13" r="2" fill="white" />
          
          {/* Smile */}
          <path
            d="M34 42C34 42 36 44 40 44C44 44 46 42 46 42"
            stroke="#8B0000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Circuit Pattern */}
          <path
            d="M15 40H22M58 40H65"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M40 58V65M40 15V22"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {showStatus && (
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
      )}
    </div>
  );
} 