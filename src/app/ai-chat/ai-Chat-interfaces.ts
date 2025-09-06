export interface ChatMessage {
  type: 'User' | 'ChatBot' | 'Prompt';  // oder andere Typen, je nach Bedarf
  content: string;
  promptText?:string;
  timestamp: string;
  activated?:boolean;
}
