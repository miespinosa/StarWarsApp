import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: []
})
export class PersonajesComponent implements OnInit {

  personajes: any[] = [];
  loading: boolean;
  constructor( private swapi: SwapiService) {
    this.loading = true;
    this.swapi.getCall('people')
      .subscribe( (data: any) => {
        console.log(data);
        this.personajes = data;
        this.loading = false;
      });
  }

  verPersonaje(item: any) {
    console.log(item);
  }

  ngOnInit() {
  }

}
