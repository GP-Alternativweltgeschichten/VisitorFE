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
    let msg = "{\"prompt\":\"" + text + "\"}";
    return this.comService.post<String>('/prompting/text', msg, null as unknown as HttpHeaders, 'arraybuffer');
  }

  /*
  sendImageText(payload: { prompt: string; image: number[] }): Observable<any> {
    console.log(JSON.stringify(payload));
    return this.comService.post<any>('/prompting/imageText', JSON.stringify(payload), null as unknown as HttpHeaders, 'arraybuffer');
  }

  sendImageMaskText(payload: { prompt: string; image: number[]; canvas: number[] }): Observable<any> {
    console.log(JSON.stringify(payload));
    return this.comService.post<any>('/prompting/imageMaskText', JSON.stringify(payload), null as unknown as HttpHeaders, 'arraybuffer');
  }
  */
}
