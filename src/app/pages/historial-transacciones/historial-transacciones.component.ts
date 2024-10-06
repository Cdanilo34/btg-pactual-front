import { Component, OnInit } from '@angular/core';
import { FondosService } from '../../services/fondos.service';

@Component({
  selector: 'app-historial-transacciones',
  templateUrl: './historial-transacciones.component.html',
  styleUrls: ['./historial-transacciones.component.css']
})
export class HistorialTransaccionesComponent implements OnInit {

  transacciones: any[] = [];

  constructor(private fondosService: FondosService) {}

  ngOnInit(): void {
    this.cargarHistorial();
  }

  cargarHistorial() {
    this.fondosService.listarTransacciones().subscribe(transacciones => {
      this.transacciones = transacciones;
    });
  }

}
