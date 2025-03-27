export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ApiError {
  error: string;
  status?: number;
}

export interface ChatbotAvatarProps {
  size?: 'sm' | 'md';
  showStatus?: boolean;
}

export interface MessageContext {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatContext {
  userName?: string;
  userDetails?: {
    [key: string]: string;
  };
  conversationHistory: Message[];
}

export interface ChatSession {
  id: string;
  context: ChatContext;
  messages: Message[];
}

export interface UserInfo {
  name?: string;
  occupation?: string;
  preferences?: string[];
  otherInfo?: { [key: string]: string };
} 