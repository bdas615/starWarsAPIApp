import { Component, OnInit } from '@angular/core';
import { MoreServService } from './../more-serv.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

   z:any;
    
  constructor(private moreServ:MoreServService) { }

  ngOnInit(): void {

    
    this.moreServ.vehi.subscribe((data2:any)=>{
      this.z = data2;
      console.log(data2)
    }
    )


  }

}
