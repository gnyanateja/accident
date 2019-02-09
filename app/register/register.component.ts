import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  createForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {

    this.createForm = new FormGroup({
      'name' : new FormControl(),
      'email' : new FormControl(),
      'username' : new FormControl(),
      'password' : new FormControl()
    });


   }

   get n() {
    return this.createForm.get('name');
   }

   get e() {
    return this.createForm.get('email');
   }

   get us() {
    return this.createForm.get('username');
   }

   get ps() {
    return this.createForm.get('password');
   }



  ngOnInit() {
  }
  register() {

    this.userService.getregistered(this.n.value, this.e.value, this.us.value, this.ps.value)
    .subscribe(() => {
      this.router.navigateByUrl('/login');
    });

  }



}
