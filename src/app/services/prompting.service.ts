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
}
