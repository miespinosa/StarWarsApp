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
}
