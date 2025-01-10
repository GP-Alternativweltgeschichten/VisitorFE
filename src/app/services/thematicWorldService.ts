import {Injectable} from '@angular/core';
import {CommunicationService} from './communication.service';
import {Observable} from 'rxjs';
import {ThematicWorld} from './ThematicWorld';

@Injectable({
  providedIn: 'root'
})
export class ThematicWorldService {

  constructor(private comService: CommunicationService) { }

  getThematicWorlds(): Observable<ThematicWorld[]> {
    return this.comService.get('/thematicworlds');
  }

}
