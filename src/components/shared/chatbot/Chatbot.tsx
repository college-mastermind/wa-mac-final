"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Message, ChatbotProps, UserInfo } from './types';
import { chatbotService } from '@/api/services/chatbotService';
import Image from 'next/image';
import ChatbotAvatar from './ChatbotAvatar';

export default function Chatbot({ isOpen = false, onClose }: ChatbotProps) {
  // Generate a unique client ID if not exists
  const [clientId] = useState(() => {
    const storedId = localStorage.getItem('chatbot_client_id');
    if (storedId) return storedId;
    const newId = 'client_' + Date.now();
    localStorage.setItem('chatbot_client_id', newId);
    return newId;
  });

  // Load previous messages from localStorage
  const [messages, setMessages] = useState<Message[]>(() => {
    const storedMessages = localStorage.getItem(`chatbot_messages_${clientId}`);
    if (storedMessages) {
      return JSON.parse(storedMessages);
    }
    return [{
      id: '1',
      content: "👋 Welcome back! How can I assist you today?",
      role: 'assistant',
      timestamp: new Date(),
    }];
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [userInfo, setUserInfo] = useState<UserInfo>(() => {
    const storedInfo = localStorage.getItem(`chatbot_userinfo_${clientId}`);
    return storedInfo ? JSON.parse(storedInfo) : {};
  });

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`chatbot_messages_${clientId}`, JSON.stringify(messages));
  }, [messages, clientId]);

  // Save user info to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(`chatbot_userinfo_${clientId}`, JSON.stringify(userInfo));
  }, [userInfo, clientId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await chatbotService.sendMessage(inputMessage.trim(), {
        clientId,
        messageHistory: messages.slice(-5),
        userInfo
      });
      
      // Update user info if new information was extracted
      if (response.userInfo) {
        setUserInfo(prev => ({ ...prev, ...response.userInfo }));
      }

      let botResponse = response.response;
      // Replace placeholders with actual user info
      if (userInfo.name) {
        botResponse = botResponse.replace('[name]', userInfo.name);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Add a function to clear chat history
  const clearChatHistory = () => {
    const confirmClear = window.confirm('Are you sure you want to clear the chat history?');
    if (confirmClear) {
      setMessages([{
        id: '1',
        content: "👋 Hello! How can I assist you today?",
        role: 'assistant',
        timestamp: new Date(),
      }]);
      localStorage.removeItem(`chatbot_messages_${clientId}`);
    }
  };

  return (
    <div className={`fixed bottom-20 xs:bottom-24 sm:bottom-28 
                     right-2 xs:right-4 sm:right-8 
                     w-[300px] xs:w-[350px] sm:w-96 
                     h-[400px] xs:h-[450px] sm:h-[500px] 
                     bg-white shadow-2xl flex flex-col 
                     transform transition-all duration-300 ease-in-out 
                     ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'} 
                     z-50 border border-[#8B0000]/20`}>
      <div className="p-3 xs:p-4 border-b bg-gradient-to-r from-[#8B0000] to-[#660000] text-white flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <ChatbotAvatar size="md" showStatus={true} />
          <div>
            <h3 className="font-semibold text-sm xs:text-base sm:text-lg">WA Assistant</h3>
            <p className="text-xs text-white/80">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearChatHistory}
            className="text-white/80 hover:text-white p-1 transition-colors"
            aria-label="Clear chat history"
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-5 w-5" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 transition-colors"
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-5 xs:h-6 w-5 xs:w-6" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 xs:p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.role === 'assistant' && (
              <ChatbotAvatar size="sm" />
            )}
            <div
              className={`max-w-[85%] p-3 text-sm xs:text-base 
                ${
                  message.role === 'user'
                    ? 'bg-[#8B0000] text-white ml-auto'
                    : 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                }`}
            >
              {message.content}
              <div className={`text-xs mt-1 ${
                message.role === 'user' ? 'text-white/70' : 'text-gray-500'
              }`}>
                {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start space-x-2">
            <ChatbotAvatar size="sm" />
            <div className="bg-white text-gray-800 p-3 border border-gray-200 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#8B0000] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#8B0000] rounded-full animate-bounce" 
                     style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-[#8B0000] rounded-full animate-bounce" 
                     style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-3 xs:p-4 border-t bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 xs:p-3 text-sm xs:text-base border
                     focus:outline-none focus:ring-2 focus:ring-[#8B0000]/50 focus:border-[#8B0000]
                     bg-gray-50"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className="px-4 xs:px-5 py-2 xs:py-3 
                     bg-gradient-to-r from-[#8B0000] to-[#660000] 
                     text-white
                     hover:from-[#660000] hover:to-[#4B0000] 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-300
                     flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
} 