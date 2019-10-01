import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent }
    { path: 'personajes', component: PersonajesComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];