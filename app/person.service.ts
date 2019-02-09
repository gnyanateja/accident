import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private header = new Headers();


  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  getpersons() {
    return this.http.get(`${this.uri}/person`);
  }

  getlicense() {
    return this.http.get(`${this.uri}/license`);
  }

  getpersonById(id) {
    return this.http.get(`${this.uri}/person/${id}`);
  }

  getlicenseById(id) {
    return this.http.get(`${this.uri}/license/${id}`);

  }


  addperson(
      pcid, plcno, pna, pse, pag, pcau, psaf,
      veid, vereg, veown, vena, vety,
       vcid, vid, vna, vmob, vadd,
       pacid, pid, pona, polo, pomb,
      sacid, sno, sna, loc, sglt, sglg
       ) {

       const person = {

        'accident_id' : pcid,
        'license_no' : plcno,
        'caused_the_accident' : pcau,
        'safety_belt_or_helmet' : psaf,
        'name' : pna,
        'sex' : pse,
        'age' : pag,
        'v_accidentid': vcid,
        'vid' : vid,
        'v_name' : vna,
        'v_mob_no' : vmob,
        'v_address' : vadd,
        've_accident_id': veid,
        've_reg_no': vereg,
        've_owner_name': veown,
        've_name' : vena,
        've_type' : vety,
        'p_accident_id': pacid,
        'p_id': pid,
        'p_name': pona,
        'p_mob_no': pomb,
        'p_location': polo,
        's_accident_id': sacid,
        's_no': sno,
        's_name': sna,
        'location': loc,
        'glat': sglt,
        'glong': sglg
      };

    return this.http.post(`${this.uri}/person/add`, person);
  }

  addlicense(l_id, n, s, a) {
    const license = {
      'license_no' : l_id,
      'name' : n,
      'sex' : s,
      'age' : a
    };
    return this.http.post(`${this.uri}/license/add`, license);
  }

  deleteperson(id) {
    return this.http.get(`${this.uri}/person/delete/${id}`);
  }

  deletelicense(id) {
    return this.http.get(`${this.uri}/license/delete/${id}`);

  }

}
