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
    this.swapi.getCall('vehicles')
      .subscribe( data => {
        this.vehiculos = data;
      });
  }

  ngOnInit() {
  }

}
