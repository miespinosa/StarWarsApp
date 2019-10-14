import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {
    console.log('swapi service');
  }


  getPeople() {
    return this.http.get('https://swapi.co/api/people/');
  }
  getVehicle() {
    return this.http.get('https://swapi.co/api/vehicles/');
  }
  getStarship() {
    return this.http.get('https://swapi.co/api/starships/');
  }
}
