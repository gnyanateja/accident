import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.createForm = new FormGroup({
      'username' : new FormControl(),
      'password' : new FormControl()
    });

}

get username() {
  return this.createForm.get('username');
}

get password() {
  return this.createForm.get('password');
}

  ngOnInit() {
  }
  getlogged() {

    this.userService.getLogged(this.username.value, this.password.value)
    .subscribe( data => {
      localStorage.setItem('token', data.toString());
      this.router.navigateByUrl('/profile');
    });

  }
}
