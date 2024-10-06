import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FondosService } from 'src/app/services/fondos.service';
import { ClienteService } from '../../services/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Fondo } from '../dto/fondo';

@Component({
  selector: 'app-mis-suscripciones',
  templateUrl: './mis-suscripciones.component.html',
  styleUrls: ['./mis-suscripciones.component.css']
})
export class MisSuscripcionesComponent implements OnInit {

  cliente: any = null;
  fondosSuscritos: any[] = [];
  clienteId: string = '1'; // ID ficticio del cliente
  fondosDisponibles: Fondo[] = [];

  constructor(private fondosService: FondosService, private clienteService: ClienteService, 
    private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.listarMisSuscripciones();
    this.listarFondosDisponibles();
  }

  listarMisSuscripciones() {
    this.clienteService.obtenerCliente(this.clienteId).subscribe(cliente => {
      this.fondosSuscritos = cliente.fondosSuscritos;
      this.cliente = cliente;
    });
  }

  cancelarFondo(fondoId: number) {
    this.fondosService.cancelarFondo(this.clienteId, fondoId).subscribe({
      next: (response) => { 
      this.toastr.success(response.message, 'Cancelacion Exitosa');
      
      this.listarMisSuscripciones();

    }, error: (error) => {
      this.toastr.error(error.error, 'Error al cancelar el fondo seleccionado');
      }
    });
  }

  suscribirFondo(fondoId: number) {
    this.fondosService.suscribirFondo(this.clienteId, fondoId).subscribe({
    next: (response) => {
      this.toastr.success(response.message, 'Suscripción Exitosa');
      
      this.listarMisSuscripciones();
    },
    error: (error) => {
      
      let fondo = this.fondosDisponibles.find(fondo => fondo.id === fondoId.toString());
   
      this.toastr.error("No tiene saldo disponible para vincularse al fondo"+ fondo.nombre);
      }
  })}

  listarFondosDisponibles() {
    this.fondosService.listarFondos().subscribe(fondos => {
      this.fondosDisponibles = fondos;
    });
  }

}
