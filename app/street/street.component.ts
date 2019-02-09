import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {StreetService} from '../street.service';

import { UserService } from '../user.service';
import { error } from 'util';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {
  createForm: FormGroup;

  username = '';
  acc_id: String;

  private sub: any;
  constructor(private route: ActivatedRoute, private stService: StreetService,
     private userservice: UserService , private fb: FormBuilder, private router: Router) {
    this.createForm = new FormGroup({
      's_no' : new FormControl(),
      's_name' : new FormControl(),
      'location' : new FormControl(),
      'glat' : new FormControl(),
      'glong' : new FormControl()
    });

    this.userservice.getUsername()
    .subscribe(
      data => this.username = data.toString(),
      err => this.router.navigateByUrl('/login')

    );

}

get sno() {
  return this.createForm.get('s_no');
}

get sname() {
  return this.createForm.get('s_name');
}

get locat() {
  return this.createForm.get('location');
}

get glt() {
  return this.createForm.get('glat');
}

get glg() {
  return this.createForm.get('glong');
}

ngOnInit() {

  this.sub = this.route.params.subscribe(params => {
    this.acc_id = params['id'];

});
}


addS() {
  this.stService.addstreet(this.acc_id, this.sno.value, this.sname.value, this.locat.value, this.glt.value, this.glg.value)
    .subscribe(() => {
      this.router.navigateByUrl('/list/' + this.acc_id);

    });

}




  }
