import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-expenss-tracker',
  standalone: false,
  
  templateUrl: './expenss-tracker.component.html',
  styleUrl: './expenss-tracker.component.css'
})
export class ExpenssTrackerComponent {
  displayedColumns: string[] = [ 'name', 'description', 'daterange',"jobType" ,"addexp"]
  dataSource:any
  datalength:any
  allData:any
   @ViewChild(MatPaginator) paginator!: MatPaginator;

   constructor(private router:Router,private apiservice:AppService){

   }

   ngAfterViewInit() {
    this.getBookingData()
    // this.dataSource.paginator = this.paginator;
  }

  getBookingData(){
    this.apiservice.getBookings().subscribe((res:any)=>{
    this.allData=res.travels;
    this.dataSource= res.travels
    this.datalength= this.dataSource.length;
    })
  }



  onPageChange(event: any): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;

    // Simulate fetching new data for the current page (this can be replaced with API call)
    this.updateTableData(startIndex, endIndex);
  }

  updateTableData(startIndex: number, endIndex: number): void {
    // Slice the data for the current page based on startIndex and endIndex
    const pageData = this.allData.slice(startIndex, endIndex);
    this.dataSource = pageData; // Update the data in the table
    // this.datalength=this.dataSource.length
  }
}
