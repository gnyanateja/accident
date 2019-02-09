import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {View} from '../view.model';
import {ViewService} from '../view.service';
@Component({
  selector: 'app-allview',
  templateUrl: './allview.component.html',
  styleUrls: ['./allview.component.css']
})
export class AllviewComponent implements OnInit {

  username = '';
  viewers: View[];
  constructor(private userservice: UserService, private router: Router, private vservice: ViewService) {
    this.isloggedin();
  }

  ngOnInit() {
    this.fetchViewers();
  }

  fetchViewers() {
    this.vservice.getViews()
    .subscribe((data: View[]) => {
      this.viewers = data;
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
