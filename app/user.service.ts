import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Router } from '@angular/router';


@Injectable()
export class UserService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}


  getLogged(u, p) {
    const user = {
      'username': u,
      'password': p
    };
    return this.http.post(`${this.uri}/login`, user);
  }

  getregistered(n, e, us, ps) {
    const user = {
      'username': us,
      'email': e,
      'name': n,
      'password': ps
    };
    return this.http.post(`${this.uri}/register`, user);
  }

  getUsername() {
    return this.http.get(`${this.uri}/username`, {
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });

  }

  getViewById(id) {
    return this.http.get(`${this.uri}/views/${id}`);
  }

}
