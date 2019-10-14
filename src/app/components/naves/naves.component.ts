import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styles: []
})
export class NavesComponent implements OnInit {

  naves: any[] = [];
  constructor( private swapi: SwapiService) {
    this.swapi.getCall('starships')
      .subscribe( (data: any) => {
        this.naves = data;
      });
  }

  ngOnInit() {
  }

}
