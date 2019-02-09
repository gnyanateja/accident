import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {Vehicle} from '../vehicle.model';
import {VehicleService} from '../vehicle.service';
@Component({
  selector: 'app-allvehicle',
  templateUrl: './allvehicle.component.html',
  styleUrls: ['./allvehicle.component.css']
})
export class AllvehicleComponent implements OnInit {

  username = '';
  vehicle: Vehicle[];
  constructor(private userservice: UserService, private router: Router, private vehservice: VehicleService) {
    this.isloggedin();
  }

  ngOnInit() {
    this.fetchvehicles();
  }

  fetchvehicles() {
    this.vehservice.getvehicle()
    .subscribe((data: Vehicle[]) => {
      this.vehicle = data;
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
