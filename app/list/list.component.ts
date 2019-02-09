import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {ViewService} from '../view.service';
import {PoliceService} from '../police.service';
import {PersonService} from '../person.service';
import {StreetService} from '../street.service';
import {VehicleService} from '../vehicle.service';

import { ViewChild } from '@angular/core';
import {} from 'google-maps';

import {View} from '../view.model';
import {Person, License} from '../person.model';
import {Police} from '../police.model';
import {Vehicle} from '../vehicle.model';
import {Street, Locate} from '../street.model';
import {Array1} from '../array1.model';
import {Array2} from '../array2.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arr1 = [ {per: { }, lic: { }}];
  arr2 = [{str: { }, loc: { }}];

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;


  username = '';
  viewers: View[];
  persons: Person[];
  license: License[];
  police: Police[];
  vehicle: Vehicle[];
  acc_id: String;
  streets: Street[];
  locates: Locate[];
  private sub: any;

  constructor(private route: ActivatedRoute, private userservice: UserService, private router: Router,
     private viewservice: ViewService,
     private pservice: PersonService,
     private polservice: PoliceService,
     private vservice: VehicleService,
     private stservice: StreetService
     ) {
    this.isloggedin();
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.acc_id = params['id'];

      // In a real app: dispatch action to load the details here.
   });
   this.fetchViewers();
   this.fetchPersons();
   this.fetchVehicle();
   this.fetchPolice();
   this.fetchStreets();

  }

  fetchViewers() {
    this.viewservice.getViewById(this.acc_id)
    .subscribe((data: View[]) => {
      this.viewers = data;
    });
  }


  fetchPersons() {

    this.pservice.getpersonById(this.acc_id)
    .subscribe((data1: Person[]) => {
      this.persons = data1;

    this.pservice.getlicenseById(this.acc_id)
    .subscribe((data2: License[]) => {
      this.license = data2;

      while (this.persons.length > 0) {
        this.arr1.pop();
        this.arr1.push({'per': this.persons.pop(), 'lic': this.license.pop()});

      }
    });

    });
  }



  fetchPolice() {
    this.polservice.getPoliceById(this.acc_id)
    .subscribe((data: Police[]) => {
      this.police = data;
    });
  }


  fetchVehicle() {
    this.vservice.getvehicleyId(this.acc_id)
    .subscribe((data: Vehicle[]) => {
      this.vehicle = data;
    });
  }

  fetchStreets() {

    this.stservice.getstreetById(this.acc_id)
    .subscribe((data1: Street[]) => {
      this.streets = data1;

    this.stservice.getlocateById(this.acc_id)
    .subscribe((data2: Locate[]) => {
      this.locates = data2;
      this.arr2.pop();
      while (this.streets.length > 0) {
        this.arr2.push({'str': this.streets.pop(), 'loc': this.locates.pop()});

      }

      this.map = new google.maps.Map(this.gmapElement.nativeElement, {
        center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    });

    });

  }

  deleteViewers(id) {
    this.viewservice.deleteView(id)
    .subscribe((data: View[]) => {
      console.log(data);
      this.fetchViewers();

    });
  }

  deletePerson(id) {
    this.pservice.deleteperson(id)
    .subscribe(() => {
      this.router.navigateByUrl('/profile');
    });
  }

  deletePolice(id) {
    this.polservice.deletePolice(id)
    .subscribe(() => {
      this.fetchPolice();
    });
  }

  deleteVehicle(id) {
    this.vservice.deleteVehicle(id)
    .subscribe(() => {
      this.fetchVehicle();
    });
  }

  deleteStreet(id) {
    this.stservice.deletestreet(id)
    .subscribe(() => {
      this.fetchStreets();
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
