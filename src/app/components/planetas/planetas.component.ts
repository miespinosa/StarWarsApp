import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styles: []
})
export class PlanetasComponent implements OnInit {

  planetas: any[] = [];
  loading: boolean;
  constructor(private swapi: SwapiService) {
    this.loading = true;
    this.swapi.getCall('planets/')
      .subscribe( (data: any) => {
        console.log(data);
        this.planetas = data;
        this.loading = false;
      });
  }
  verPlaneta(item: any) {
    console.log(item);
  } 
  ngOnInit() {
  }

}
