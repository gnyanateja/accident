import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {VehicleService} from '../vehicle.service';
import { UserService } from '../user.service';
import { error } from 'util';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  createForm: FormGroup;

  username = '';
  acc_id: String;

  private sub: any;


  constructor(private route: ActivatedRoute, private vService: VehicleService,
    private userservice: UserService , private fb: FormBuilder, private router: Router) {

      this.createForm = new FormGroup({
        've_accident_id' : new FormControl(),
        've_reg_no' : new FormControl(),
        've_owner_name' : new FormControl(),
        've_name' : new FormControl(),
        've_type' : new FormControl()
      });

      this.userservice.getUsername()
    .subscribe(
      data => this.username = data.toString(),
      err => this.router.navigateByUrl('/login')

    );
    }



  get veaccident_id() {
    return this.createForm.get('ve_accident_id');
  }

  get vereg_no() {
    return this.createForm.get('ve_reg_no');
  }

  get veowner_name() {
    return this.createForm.get('ve_owner_name');
  }

  get vename() {
    return this.createForm.get('ve_name');
  }

  get vetype() {
    return this.createForm.get('ve_type');
  }


  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.acc_id = params['id'];
  });
  }

 addVehicle() {

  this.vService.addvehicle(this.acc_id, this.vereg_no.value,
     this.veowner_name.value, this.vename.value, this.vetype.value)
  .subscribe(() => {
    this.router.navigateByUrl('/list/' + this.acc_id);
  });
 }

}
