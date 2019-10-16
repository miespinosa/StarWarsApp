import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { NavesComponent } from './components/naves/naves.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchComponent } from './components/shared/search/search.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
// Importar Rutas
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PersonajesComponent,
    PeliculasComponent,
    PlanetasComponent,
    NavesComponent,
    VehiculosComponent,
    EspeciesComponent,
    LoadingComponent,
    SearchComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
