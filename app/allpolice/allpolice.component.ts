import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {Police} from '../police.model';
import {PoliceService} from '../police.service';
@Component({
  selector: 'app-allpolice',
  templateUrl: './allpolice.component.html',
  styleUrls: ['./allpolice.component.css']
})
export class AllpoliceComponent implements OnInit {

  username = '';
  polices: Police[];
  constructor(private userservice: UserService, private router: Router, private polservice: PoliceService) {
    this.isloggedin();
   }

  ngOnInit() {
    this.fetchPolices();
  }

  fetchPolices() {
    this.polservice.getPolice()
    .subscribe((data: Police[]) => {
      this.polices = data;
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
