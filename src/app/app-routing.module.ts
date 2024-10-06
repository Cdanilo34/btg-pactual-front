import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FondosDisponiblesComponent } from './pages/fondos-disponibles/fondos-disponibles.component';
import { HistorialTransaccionesComponent } from './pages/historial-transacciones/historial-transacciones.component';
import { MisSuscripcionesComponent } from './pages/mis-suscripciones/mis-suscripciones.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'fondos-disponibles', component: FondosDisponiblesComponent },
  { path: 'mis-suscripciones', component: MisSuscripcionesComponent },
  { path: 'historial-transacciones', component: HistorialTransaccionesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
