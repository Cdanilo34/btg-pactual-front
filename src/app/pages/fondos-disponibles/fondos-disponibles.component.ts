import { Component, OnInit } from '@angular/core';
import { FondosService } from '../../services/fondos.service';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fondos-disponibles',
  templateUrl: './fondos-disponibles.component.html',
  styleUrls: ['./fondos-disponibles.component.css']
})
export class FondosDisponiblesComponent implements OnInit {

  cliente: any = null;
  fondosDisponibles: any[] = [];
  clienteId: string = '1'; // ID cliente

  constructor(private fondosService: FondosService, private clienteService: ClienteService,
    private toastr: ToastrService, private router: Router ) {}

  ngOnInit(): void {
    this.cargarFondosDisponibles();
  }

  cargarFondosDisponibles() {
    this.fondosService.listarFondos().subscribe(fondos => {
      this.fondosDisponibles = fondos;
    });
  }

  suscribirFondo(fondoId: number) {
    this.fondosService.suscribirFondo(this.clienteId, fondoId).subscribe({
    next: (response) => {
      this.toastr.success(response.message, 'Suscripción Exitosa');
      location.reload();
    }
  })}

}
