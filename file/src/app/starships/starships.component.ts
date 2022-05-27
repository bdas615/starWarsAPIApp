import { Component, OnInit } from '@angular/core';
import { MoreServService } from './../more-serv.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  y:any;

  constructor(private moreServ:MoreServService) { }

  ngOnInit(): void {


    this.moreServ.starsh.subscribe((data1:any)=>
    {
      this.y = data1;
      console.log(this.y)
    }
    )
  }

}
