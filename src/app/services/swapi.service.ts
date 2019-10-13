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
<<<<<<< HEAD
  getPlanet() {
    return this.http.get('https://swapi.co/api/planets/');
=======
  getVehicle() {
    return this.http.get('https://swapi.co/api/vehicles/');
  }
  getStarship() {
    return this.http.get('https://swapi.co/api/starships/');
>>>>>>> da69ddc7bb5395c25cf82f8d6dd2111b30b7237e
  }
}
