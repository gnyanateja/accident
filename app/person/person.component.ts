import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {ViewService} from '../view.service';
import {PoliceService} from '../police.service';
import {PersonService} from '../person.service';
import {StreetService} from '../street.service';
import {VehicleService} from '../vehicle.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  createForm: FormGroup;
  username = '';


  constructor(private route: ActivatedRoute, private userservice: UserService, private router: Router,
  private viewservice: ViewService,
  private pservice: PersonService,
  private polservice: PoliceService,
  private vservice: VehicleService,
  private stservice: StreetService
  ) {
    this.createForm = new FormGroup({
      'accident_id': new FormControl(),
      'license_no': new FormControl(),
      'name': new FormControl(),
      'sex': new FormControl(),
      'age': new FormControl(),
      'caused_the_accident': new FormControl(),
      'safety_belt_or_helmet': new FormControl(),

      've_accident_id' : new FormControl(),
      've_reg_no' : new FormControl(),
      've_owner_name' : new FormControl(),
      've_name' : new FormControl(),
      've_type' : new FormControl(),


      'v_accidentid' : new FormControl(),
      'vid' : new FormControl(),
      'v_name' : new FormControl(),
      'v_mob_no' : new FormControl(),
      'v_address' : new FormControl(),



      'p_id' : new FormControl(),
      'p_name' : new FormControl(),
      'p_mob_no' : new FormControl(),
      'p_location' : new FormControl(),



      's_no' : new FormControl(),
      's_name' : new FormControl(),
      'location' : new FormControl(),
      'glat' : new FormControl(),
      'glong' : new FormControl()
    });

}

  ngOnInit() {
  }

get acid() {
  return this.createForm.get('accident_id');
}

get lcno() {
  return this.createForm.get('license_no');
}

get n() {
  return this.createForm.get('name');
}

get s() {
  return this.createForm.get('sex');

}

get a() {
  return this.createForm.get('age');

}

get cause() {
  return this.createForm.get('caused_the_accident');
}

get safe() {
  return this.createForm.get('safety_belt_or_helmet');
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

get v_accident() {
  return this.createForm.get('v_accidentid');
}

get v_id() {
  return this.createForm.get('vid');
}

get vname() {
  return this.createForm.get('v_name');
}

get vmob_no() {
  return this.createForm.get('v_mob_no');
}

get vaddress() {
  return this.createForm.get('v_address');
}


get pi() {
  return this.createForm.get('p_id');
}

get na() {
  return this.createForm.get('p_name');
}

get lo() {
  return this.createForm.get('p_location');
}

get mb() {
  return this.createForm.get('p_mob_no');
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




addPersons() {
 this.pservice.addperson(this.acid.value, this.lcno.value, this.n.value, this.s.value, this.a.value, this.cause.value, this.safe.value,
  this.acid.value, this.vereg_no.value, this.veowner_name.value, this.vename.value, this.vetype.value,
  this.acid.value, this.v_id.value,
  this.vname.value, this.vmob_no.value, this.vaddress.value,
  this.acid.value , this.pi.value, this.na.value, this.lo.value, this.mb.value,
  this.acid.value, this.sno.value, this.sname.value, this.locat.value, this.glt.value, this.glg.value)
  .subscribe(() => {
    this.router.navigateByUrl('/profile');
  });
}






}
