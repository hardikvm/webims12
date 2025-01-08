import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { SignupComponent } from './signup/signup.component';
import { AddvisitComponent } from './addvisit/addvisit.component';
import { ExpenssTrackerComponent } from './expenss-tracker/expenss-tracker.component';
import { ItnerariesComponent } from './itneraries/itneraries.component';

const routes: Routes = [
  {
  path:'',
  component:SignupComponent,
  },
  {
    path:"addvisit",
    component:AddvisitComponent
  },
  {
    path:"itineraries",
    component:ItnerariesComponent
  },
  {
    path:"exptracker",
    component:ExpenssTrackerComponent
  },
  {
  path:'bookings',
  component:BookingsComponent
  },
  {
    path:'signUp',
    component:SignupComponent
  },{
    path:'bookvisit',
    component:AddvisitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
