import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


const ELEMENT_DATA: any=[
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
@Component({
  selector: 'app-bookings',
  standalone: false,
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})

export class BookingsComponent implements OnInit{
  displayedColumns: string[] = [ 'name', 'description', 'daterange',"jobType"]
  dataSource:any
  datalength:any
  allData:any
  // dataSource = ELEMENT_DATA;
  // datalength=this.dataSource.length

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router:Router,private apiservice:AppService){

  }
  ngAfterViewInit() {
    this.getBookingData()
    // this.dataSource.paginator = this.paginator;
  }

  

  ngOnInit() {
    // this.getBookingData()
    
    
  }

  getBookingData(){
    this.apiservice.getBookings().subscribe((res:any)=>{
    this.allData=res.travels;
    this.dataSource= res.travels
    this.datalength= this.dataSource.length;
    })
  }

  addVisit(){
    this.router.navigate(['/addvisit'])
   
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
