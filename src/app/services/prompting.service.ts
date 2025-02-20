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

  sendTextAndImageAndMaskAndModel(text: string, image: string, mask: string, model: number): Observable<any> {
    const requestBody = {
      prompt: text,
      image: image,
      mask: mask,
      model: model
    };
    console.log('Prompt sent:', text, model);
    return this.comService.post<String>('/prompting/inpainting', requestBody, null as unknown as HttpHeaders, 'blob');
  }

  getAIModel(): Observable<number> {
    return this.comService.get<number>('/prompting/aiModel');
  }

  saveAIModel(model: number): Observable<Number> {
    return this.comService.post<Number>('/prompting/aiModel', model);
  }
}
