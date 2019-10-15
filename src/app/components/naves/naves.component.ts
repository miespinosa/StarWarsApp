import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styles: []
})
export class NavesComponent implements OnInit {

  naves: any[] = [];
  loading: boolean;
  constructor( private swapi: SwapiService) {
    this.loading = true;
    this.swapi.getCall('starships/')
      .subscribe( (data: any) => {
        console.log(data);
        this.naves = data;
        this.loading = false;
      });
  }

  verNave(item: any) {
    console.log(item);
  }

  ngOnInit() {
  }

}
