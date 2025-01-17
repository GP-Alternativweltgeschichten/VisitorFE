import {Injectable} from '@angular/core';
import {CommunicationService} from './communication.service';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptingService {

  constructor(private comService: CommunicationService) {
  }

  sendText(text: string): Observable<any> {
    const msg = {
      prompt: text
    };
    return this.comService.post<String>('/prompting/text', msg, null as unknown as HttpHeaders, 'blob');
  }

  sendTextAndImageAndMask(text: string, image: string, mask: string): Observable<any> {
    const requestBody = {
      prompt: text,
      image: image,
      mask: mask
    };
    return this.comService.post<String>('/prompting/inpainting', requestBody, null as unknown as HttpHeaders, 'blob');
  }
}
