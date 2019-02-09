import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {ViewService} from '../view.service';
import { UserService } from '../user.service';
import { error } from 'util';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  createForm: FormGroup;

  username = '';
  acc_id: String;

  private sub: any;

  constructor(private route: ActivatedRoute, private viewService: ViewService,
     private userservice: UserService , private fb: FormBuilder, private router: Router) {
    this.createForm = new FormGroup({
      'v_accidentid' : new FormControl(),
      'vid' : new FormControl(),
      'v_name' : new FormControl(),
      'v_mob_no' : new FormControl(),
      'v_address' : new FormControl()
    });

    this.userservice.getUsername()
    .subscribe(
      data => this.username = data.toString(),
      err => this.router.navigateByUrl('/login')

    );

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
ngOnInit() {

  this.sub = this.route.params.subscribe(params => {
    this.acc_id = params['id'];
});
}

addView(vid, v_name, v_mob_no, v_address) {

    this.viewService.addView(this.acc_id, this.v_id.value,
       this.vname.value, this.vmob_no.value, this.vaddress.value)
    .subscribe(() => {
      this.router.navigateByUrl('/list/' + this.acc_id);
    });

  }
}
