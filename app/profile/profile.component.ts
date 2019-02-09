import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import { PersonService } from '../person.service';
import {Person, License} from '../person.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = '';
  persons: Person[];
  license: License[];
  constructor(private userservice: UserService, private router: Router, private pservice: PersonService) {

    this.isloggedin();
  }

  ngOnInit() {
    this.fetchPersons();

  }

  fetchPersons() {
    this.pservice.getpersons()
    .subscribe((data1: Person[]) => {
      this.persons = data1;
      console.log('Data requested');
      console.log(this.persons);
    });
    this.pservice.getlicense()
    .subscribe((data2: License[]) => {
      this.license = data2;
      console.log('Data requested');
      console.log(this.license);
    });
  }



  isloggedin() {
    this.userservice.getUsername()
    .subscribe(
      data => this.username = data.toString(),
      err => this.router.navigateByUrl('/login'),

    );
  }



}
