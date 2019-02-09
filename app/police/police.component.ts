import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {PoliceService} from '../police.service';
import { UserService } from '../user.service';
import { error } from 'util';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {
  createForm: FormGroup;
  username = '';
  acc_id: String;

  private sub: any;


  constructor(private uservice: UserService, private route: ActivatedRoute,
     private policeService: PoliceService,  private fb: FormBuilder, private router: Router) {
    this.createForm = new FormGroup({
      'p_id' : new FormControl(),
      'p_name' : new FormControl(),
      'p_mob_no' : new FormControl(),
      'p_location' : new FormControl()


    });
    this.fb.group({
      phone: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
  });

    this.isloggedin();


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
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.acc_id = params['id'];
  });
  }
  addPolice() {

    this.policeService.addPolice(this.acc_id, this.pi.value, this.na.value, this.lo.value, this.mb.value)
    .subscribe(() => {
      this.router.navigate(['/list/' + this.acc_id]);
    });
  }


  isloggedin() {
    this.uservice.getUsername()
    .subscribe(
      data => this.username = data.toString(),
      err => this.router.navigateByUrl('/login'),

    );
  }


}
