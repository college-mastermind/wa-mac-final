"use client"
import React, { useState } from 'react';
import Chatbot from './Chatbot';
import ChatbotButton from './ChatbotButton';

export default function ChatbotWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotButton 
        onClick={() => setIsOpen(!isOpen)} 
        isOpen={isOpen} 
      />
      <Chatbot 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
} 