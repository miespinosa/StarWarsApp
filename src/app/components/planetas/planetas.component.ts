import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styles: []
})
export class PlanetasComponent implements OnInit {

  planetas: any[] = [];
  constructor(private swapi: SwapiService) {
    this.swapi.getCall('planets')
      .subscribe( (data: any) => {
        this.planetas = data;
      });
  }

  ngOnInit() {
  }

}
