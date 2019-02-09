import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {Street} from '../street.model';
import {StreetService} from '../street.service';
@Component({
  selector: 'app-allstreet',
  templateUrl: './allstreet.component.html',
  styleUrls: ['./allstreet.component.css']
})
export class AllstreetComponent implements OnInit {

  username = '';
  streets: Street[];
  constructor(private userservice: UserService, private router: Router, private streetservice: StreetService) {
    this.isloggedin();
   }

  ngOnInit() {
    this.fetchStreets();
  }

  fetchStreets() {
    this.streetservice.getstreets()
    .subscribe((data: Street[]) => {
      this.streets = data;
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
