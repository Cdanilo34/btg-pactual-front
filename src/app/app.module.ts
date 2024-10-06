import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FondosDisponiblesComponent } from './pages/fondos-disponibles/fondos-disponibles.component';
import { MisSuscripcionesComponent } from './pages/mis-suscripciones/mis-suscripciones.component';
import { HistorialTransaccionesComponent } from './pages/historial-transacciones/historial-transacciones.component';
import { HttpClientModule } from '@angular/common/http';
import { FondosService } from './services/fondos.service';
import { MenuComponent } from './components/menu/menu.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FondosDisponiblesComponent,
    MisSuscripcionesComponent,
    HistorialTransaccionesComponent,
    MenuComponent,
    HomepageComponent
  ],
  imports: [
    BrowserAnimationsModule,  // Importa BrowserAnimationsModule
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FondosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
