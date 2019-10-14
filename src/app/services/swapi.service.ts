import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {
    console.log('swapi service');
  }

  getCall(EndPoint: string) {
    const url = `https://swapi.co/api/${ EndPoint }`;
    return this.http.get(url)
      .pipe( map( data => data['results'] ));
  }

}
