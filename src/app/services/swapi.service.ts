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
    this.http.get('https://swapi.co/api/people/')
        .subscribe(data => {
          console.log(data);
        });
  }
}
