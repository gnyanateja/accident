import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getvehicle() {
    return this.http.get(`${this.uri}/vehicle`);
  }

  getvehicleyId(id) {
    return this.http.get(`${this.uri}/vehicle/${id}`);
  }

  addvehicle(acid, reg, oname, name, type) {
    const vehicle = {
      've_accident_id': acid,
      've_reg_no': reg,
      've_owner_name': oname,
      've_name': name,
      've_type': type

    };
    console.log(vehicle);
    return this.http.post(`${this.uri}/vehicle/add`, vehicle);
  }


  deleteVehicle(id) {
    return this.http.get(`${this.uri}/vehicle/delete/${id}`);
  }
}
