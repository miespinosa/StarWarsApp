import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: []
})
export class PersonajesComponent implements OnInit {

  constructor( private swapi: SwapiService) {
    this.swapi.getPeople();
  }

  ngOnInit() {
  }

}
