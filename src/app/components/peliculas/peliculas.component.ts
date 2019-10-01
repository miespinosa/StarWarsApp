import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  constructor( private swapi: SwapiService) {
    this.swapi.getPeople();
  }

  ngOnInit() {
  }

}
