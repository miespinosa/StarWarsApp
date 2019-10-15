import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styles: []
})
export class PlanetasComponent {

  planetas: any[] = [];
  loading: boolean;
  nextUrl: string;
  previousUrl: string;

  constructor(private swapi: SwapiService) {
    this.loading = true;
    this.swapi.getCall('planets/')
      .subscribe( (data: any) => {
        console.log(data);
        this.planetas = data['results'];
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
          this.planetas = data['results'];
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
          this.planetas = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }

}
