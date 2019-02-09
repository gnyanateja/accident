import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getstreets() {
    return this.http.get(`${this.uri}/street`);
  }

  getlocates() {
    return this.http.get(`${this.uri}/locate`);
  }

  getstreetById(id) {
    return this.http.get(`${this.uri}/street/${id}`);
  }

  getlocateById(id) {
    return this.http.get(`${this.uri}/locate/${id}`);
  }

  addstreet(accid, sno, name, loc , lat, lng) {
    const street = {
      's_accident_id': accid,
      's_no': sno,
      's_name': name,
      'location': loc,
      'glat': lat,
      'glong': lng
    };
    console.log(street);
    return this.http.post(`${this.uri}/street/add`, street);
  }



  deletestreet(id) {
    return this.http.get(`${this.uri}/street/delete/${id}`);
  }
}
