import axios, { AxiosError } from 'axios';
import axiosInstance from '../axios';
import { Message, UserInfo } from '@/components/shared/chatbot/types';

interface ChatContext {
  clientId: string;
  messageHistory: Message[];
  userInfo?: UserInfo;
}

export interface ChatbotResponse {
  response: string;
  error?: string;
  userInfo?: UserInfo;
}

export const chatbotService = {
  sendMessage: async (message: string, context?: ChatContext) => {
    try {
      const response = await axiosInstance.post('/chatbot/', {
        user_input: message,
        conversation_history: context?.messageHistory?.slice(-5).map(msg => ({
          content: msg.content,
          role: msg.role,
          timestamp: msg.timestamp
        })),
        client_id: context?.clientId,
        user_info: context?.userInfo
      });

      if (!response.data) {
        throw new Error('No response data received');
      }

      // Extract user information from the message if present
      const userInfo = extractUserInfo(message, context?.userInfo);
      
      return {
        response: response.data.response || response.data.message || 'No response received',
        userInfo
      };
    } catch (error) {
      console.error('Error in chatbotService:', error);
      throw error;
    }
  },
};

function extractUserInfo(message: string, existingInfo: UserInfo = {}): UserInfo | undefined {
  const nameMatch = message.match(/(?:I am|I'm|my name is) ([A-Za-z]+)/i);
  const occupationMatch = message.match(/(?:I am|I'm) (?:an?|the) ([A-Za-z]+(?:\s[A-Za-z]+)*)/i);
  
  if (!nameMatch && !occupationMatch) return undefined;

  return {
    ...existingInfo,
    ...(nameMatch && { name: nameMatch[1] }),
    ...(occupationMatch && { occupation: occupationMatch[1] })
  };
} 