import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPolice() {
    return this.http.get(`${this.uri}/police`);
  }

  getPoliceById(id) {
    return this.http.get(`${this.uri}/police/${id}`);
  }

  addPolice(ac, id, na, lo , mb) {
    const police = {
      'p_accident_id': ac,
      'p_id' : id,
      'p_name' : na,
      'p_mob_no' : mb,
      'p_location' : lo

    };
    return this.http.post(`${this.uri}/police/add`, police);
  }

  deletePolice(id) {
    return this.http.get(`${this.uri}/police/delete/${id}`);
  }
}
