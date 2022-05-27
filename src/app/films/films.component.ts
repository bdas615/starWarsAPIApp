import { Component, OnInit,ViewChild } from '@angular/core';
import { MoreServService } from './../more-serv.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData3
{
  title:any;
  director:any;
  producer:any;
  release_date:any;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  displayedColumns: any[] = ['title','director','producer','release_date'];

  dataSource = new MatTableDataSource<UserData3>();

  @ViewChild(MatPaginator, {static:true}) paginator! : MatPaginator;
  @ViewChild(MatSort, {static:true}) sort! : MatSort;

  x:any;

  constructor(private ms:MoreServService) { }

  ngOnInit(): void {
  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  
    this.ms.film.subscribe((data:any)=>
    {
      this.x = data;
      this.dataSource.data = data;
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
