import { Component, OnInit } from '@angular/core';
import { MoreServService } from './../more-serv.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  x:any;
 
  constructor(private ms:MoreServService) { }

  ngOnInit(): void {
  
    this.ms.film.subscribe((data:any)=>
    {
    this.x = data;
    console.log(this.x)
    }
  )
  }

}
