import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getViews() {
    return this.http.get(`${this.uri}/views`);
  }

  getViewById(id) {
    return this.http.get(`${this.uri}/views/${id}`);
  }

  addView(ac, id, na, mb, ad) {
    const view = {
      'v_accidentid': ac,
      'vid': id,
      'v_name' : na,
      'v_mob_no': mb,
      'v_address' : ad

    };
    return this.http.post(`${this.uri}/views/l`, view);
  }


  deleteView(id) {
    return this.http.get(`${this.uri}/views/delete/${id}`);
  }
}

