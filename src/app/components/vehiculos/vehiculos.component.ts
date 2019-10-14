import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styles: []
})
export class VehiculosComponent implements OnInit {

  vehiculos: any[] = [];
  loading: boolean;
  constructor( private swapi: SwapiService) {
    this.loading = true;
    this.swapi.getCall('vehicles')
      .subscribe( (data: any) => {
        console.log(data);
        this.vehiculos = data;
        this.loading = false;
      });
  }

  verVehiculos(item: any) {
    console.log(item);
  }

  ngOnInit() {
  }

}
