import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from '../pages/dto/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiBase = 'http://localhost:8080/api/cliente';

  constructor(private http: HttpClient) { }

  obtenerCliente(clienteId: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiBase}/${clienteId}`); // Este endpoint debe existir
  }
}
