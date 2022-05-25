import { Component, OnInit } from '@angular/core';
import { MoreServService } from './../more-serv.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  users:any;
  val:any;
  films:any;
  vehicles:any;
  starships:any;
  
  constructor(private ms:MoreServService) { }

  ngOnInit(): void {

    this.ms.transferValues().subscribe((data1:any)=>
    { 
        data1 = data1.results;
        this.users = data1; 
    } )
  }
  
  clickFilms(e:any)
  {
      this.ms.getFilms(e);
  }
  
  clickVehicles(f:any)
  {
    this.ms.getVehicles(f);   
  }

  clickStarship(g:any)
{
    this.ms.getStarship(g);
}
}
