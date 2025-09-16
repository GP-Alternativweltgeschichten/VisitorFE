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

  sendMessage(text: string, conversationId: number): Observable<any> {
    console.log(' Sending message: ', text, ' to conversation ID: ', conversationId);
    const payload: any = {
      text: text,
      conversationId: conversationId
    }
    console.log(' payload message: ', payload);
    return this.comService.post('/aiChat/text', payload, null as unknown as HttpHeaders, "text");
  }


  sendImage( image: string, mask: string, conversationId: number): Observable<any> {
    const payload: any = {
      image: image,
      mask:mask,
      conversationId: conversationId
    }
    return this.comService.post<String>('/aiChat/text', payload, null as unknown as HttpHeaders);
  }


}
