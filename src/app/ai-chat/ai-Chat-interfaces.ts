export interface ChatMessage {
  type: 'User' | 'ChatBot' | 'Prompt';  // oder andere Typen, je nach Bedarf
  content: string;
  timestamp: string;
}
export interface Prompt {
  id: number;
  prompt: string;
  timestamp: string
}
