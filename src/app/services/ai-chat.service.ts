// ai-chat.service.ts
import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  constructor(private comService: CommunicationService) {}

  sendMessage(text: string, conversationId?: string): Observable<any> {
    const payload: any = { message: text };
    if (conversationId) payload.conversationId = conversationId;
    // ResponseType weglassen -> default JSON
    return this.comService.post<any>('/aiChat/chat', payload, null as unknown as HttpHeaders);
  }


  sendMessageWithImage(text: string, image: string, mask: string, conversationId?: string): Observable<any> {
    const payload: any = {
      message: text,
      image: image,
      mask:mask,
    };
    if (conversationId) payload.conversationId = conversationId;
    return this.comService.post<any>('/aiChat/chat-with-image', payload, null as unknown as HttpHeaders);
  }


}
