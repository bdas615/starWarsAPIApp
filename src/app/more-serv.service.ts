import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoreServService {
 
  film:any;
  starsh:any;
  vehi:any;

  constructor(private httpC:HttpClient) { }

  add='https://swapi.dev/api/people';

  transferValues()
  {  
    return this.httpC.get(this.add);
  }
 
  getFilms(films:any){
    this.film = forkJoin(films.map((filmUrl:any)=>{
      return this.httpC.get(filmUrl)
    }))
  }
  
  getStarship(starships:any){
    this.starsh = forkJoin(starships.map((filmUrl:any)=>{
      return this.httpC.get(filmUrl)
    }))
  }

  getVehicles(vehicles:any){
    this.vehi = forkJoin(vehicles.map((filmUrl:any)=>{
      return this.httpC.get(filmUrl)
    }))
  } 
}

