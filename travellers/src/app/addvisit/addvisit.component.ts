import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-addvisit',
  standalone: false,
  
  templateUrl: './addvisit.component.html',
  styleUrl: './addvisit.component.css'
})
export class AddvisitComponent {


  username:any
  visitop:any=[
    {
      op:1,val:"Client Visit"
   },
    {
      op:2,val:"Conference"
   },
    {
      op:3,val:"Main Office"
   },
    {
      op:4,val:"Meetings"
   }
  ]
  fromDt:any
  toDt:any
  selectedValue:any
  desc:any
  expenses:any
  constructor(private router:Router,private apiservice:AppService){

  }


  close(){
    this.router.navigate(['/bookings'])
  }

  bookVisit(){
  let data={
    name:this.username,
    jobType:this.selectedValue,
    description:this.desc,
    dateFrom: new Date(this.fromDt).toISOString(),
    dateTo:new Date(this.toDt).toISOString()
    // expenses:this.expenses
  }

  this.apiservice.addbooking(data).subscribe((res:any)=>{
    this.close()
  })


  }
}
