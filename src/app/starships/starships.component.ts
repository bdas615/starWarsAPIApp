import { Component, OnInit,ViewChild } from '@angular/core';
import { MoreServService } from './../more-serv.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData2
{
  name:any;
  model:any;
  manufacturer:any;
  crew:any;
}

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  displayedColumns: any[] = ['name', 'model', 'manufacturer', 'crew'];

  y:any;

  dataSource = new MatTableDataSource<UserData2>();

  @ViewChild(MatPaginator, {static:true}) paginator! : MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;


  constructor(private moreServ:MoreServService) { }

  ngOnInit(): void {


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.moreServ.starsh.subscribe((data1:any)=>
    {
      this.y = data1;
      this.dataSource.data = data1;
      console.log(this.y)
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
