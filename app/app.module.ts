import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,
   MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatMenuModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import {UserService} from './user.service';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewerComponent } from './viewer/viewer.component';
import { PoliceComponent } from './police/police.component';
import { ViewService } from './view.service';
import { PoliceService } from './police.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { StreetComponent } from './street/street.component';
import { PersonComponent } from './person/person.component';
import { AllviewComponent } from './allview/allview.component';
import { AllpoliceComponent } from './allpolice/allpolice.component';
import { AllvehicleComponent } from './allvehicle/allvehicle.component';
import { VehicleService } from './vehicle.service';
import { StreetService } from './street.service';
import { PersonService } from './person.service';
import { AllstreetComponent } from './allstreet/allstreet.component';

const routes: Routes = [
  {path : 'view', component: ViewComponent},
  {path : 'viewer/:id', component: ViewerComponent},
  {path : 'police/:id', component: PoliceComponent},
  {path : 'vehicle/:id', component: VehicleComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'person', component: PersonComponent},
  {path : 'list/:id', component : ListComponent},
  {path : 'street/:id', component : StreetComponent},
  {path : 'allview', component : AllviewComponent},
  {path : 'allpolice', component : AllpoliceComponent},
  {path : 'allvehicle', component : AllvehicleComponent},
  {path : 'allstreet', component : AllstreetComponent},
  {path : '', redirectTo: 'view', pathMatch: 'full'} // pathmatch is used for checking exact match
];


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ListComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    ViewerComponent,
    PoliceComponent,
    VehicleComponent,
    StreetComponent,
    PersonComponent,
    AllviewComponent,
    AllpoliceComponent,
    AllvehicleComponent,
    AllstreetComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatMenuModule,
    Ng2GoogleChartsModule
  ],
  providers: [UserService, ViewService, PersonService, PoliceService, VehicleService, StreetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
