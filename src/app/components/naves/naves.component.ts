import { Component } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styles: []
})
export class NavesComponent {

  naves: any[] = [];
  loading: boolean;
  nextUrl: string;
  previousUrl: string;

  constructor( private swapi: SwapiService) {
    this.loading = true;
    this.swapi.getCall('starships/')
      .subscribe( (data: any) => {
        console.log(data);
        this.naves = data;
        this.loading = false;
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
      });
  }

  nextPage() {
    if (this.nextUrl !== '') {
      console.log(this.nextUrl);
      this.loading = true;
      this.swapi.getNewCall(this.nextUrl)
        .subscribe( (data: any) => {
          console.log(data);
          this.naves = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }

  previousPage() {
    if (this.previousUrl !== '') {
      this.loading = true;
      this.swapi.getNewCall(this.previousUrl)
        .subscribe( (data: any) => {
          console.log(data);
          this.naves = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }

}