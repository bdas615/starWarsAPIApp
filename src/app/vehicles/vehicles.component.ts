import { Component, OnInit,ViewChild } from '@angular/core';
import { MoreServService } from './../more-serv.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData
{
  name:any;
  model:any;
  manufacturer:any;
  crew:any;
}

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

   displayedColumns: any[] = ['name','model','manufacturer','crew'];
   
   z:any;

   dataSource = new MatTableDataSource<UserData>();

   @ViewChild(MatPaginator, {static:true}) paginator! : MatPaginator;
   @ViewChild(MatSort, {static:true}) sort!: MatSort;
    
   constructor(private moreServ:MoreServService) { }

   ngOnInit(): void {

    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.moreServ.vehi.subscribe((data2:any)=>{

      this.z = data2;
      this.dataSource = data2;
    }
    )
  }
  
  applyFilter(event:Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if(this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }

}
