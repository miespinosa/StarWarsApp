import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { NavesComponent } from './components/naves/naves.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { EspeciesComponent } from './components/especies/especies.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'naves', component: NavesComponent },
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'especies', component: EspeciesComponent },
    { path: 'planetas', component: PlanetasComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
