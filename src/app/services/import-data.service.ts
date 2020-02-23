import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Bull} from '../classes/bull.model';

@Injectable({
  providedIn: 'root'
})
export class ImportDataService {

  constructor(private http: HttpClient) {

  }

  getBulls() {
    return this.http.get('assets/data/cows.json');
  }

  getBull(bullId) {
    return this.http.get('assets/data/cows.json')
      .pipe(map(((bulls: any) => {
        return bulls.find((bull: Bull) => {
          return bull.codigoDeToro === bullId;
        });
      })));
  }
}
