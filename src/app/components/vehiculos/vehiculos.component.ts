import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styles: []
})
export class VehiculosComponent implements OnInit {

  vehiculos: any[] = [];
  constructor( private swapi: SwapiService) {
    this.swapi.getVehicle()
      .subscribe( (data: any) => {
        console.log(data.results);
        this.vehiculos = data.results;
      });
  }

  ngOnInit() {
  }

}
