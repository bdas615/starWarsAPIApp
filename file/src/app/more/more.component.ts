import { Component, OnInit } from '@angular/core';
import { MoreServService } from './../more-serv.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})

export class MoreComponent implements OnInit {

  dhoni:any;
  length_x:any;
  length_y:any;
  arr_x:any;
  arr_y:any;
  y:any;
  x:any;
  z:any;
  a:any;
  pos='5';
  index_x:any;
  index_y:any;
  panelOpenState=false;

  constructor(private moreServ:MoreServService) { }

  ngOnInit(): void 
  {
      this.moreServ.film.subscribe((data:any)=>
      {
      this.x = data;
      console.log(this.x)
      }
    )
  
      this.moreServ.starsh.subscribe((data1:any)=>
      {
        this.y = data1;
      }
    )

      this.moreServ.vehi.subscribe((data2:any)=>{
      this.z = data2;
      console.log(data2)
    }
    )
    
  } 
}





