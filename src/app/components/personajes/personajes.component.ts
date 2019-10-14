import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: []
})
export class PersonajesComponent implements OnInit {

  personajes: any[] = [];
  constructor( private swapi: SwapiService) {
    this.swapi.getPeople()
      .subscribe( (data: any) => {
        console.log(data.results);
        this.personajes = data.results;
      });
  }

  ngOnInit() {
  }

}
