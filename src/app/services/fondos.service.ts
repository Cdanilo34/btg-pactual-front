import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { Fondo } from '../pages/dto/fondo';

@Injectable({
  providedIn: 'root'
})
export class FondosService {

  private apiBase = 'http://localhost:8080/api/fondos';

  constructor(private http: HttpClient) {}

  listarFondos(): Observable<Fondo[]> {
    return this.http.get<Fondo[]>(`${this.apiBase}/list`);
  }

  suscribirFondo(clienteId: string, fondoId: number): Observable<any> {
    return this.http.post(`${this.apiBase}/suscripcion/${clienteId}/${fondoId}`, {})
    .pipe(
      catchError(this.handleError)
    );
  }

  cancelarFondo(clienteId: string, fondoId: number): Observable<any> {
    return this.http.post(`${this.apiBase}/cancelacion/${clienteId}/${fondoId}`, {})
    .pipe(
      catchError(this.handleError)
    );
  }
  
  listarTransacciones(): Observable<any> {
    return this.http.get(`${this.apiBase}/transacciones`);
  }

  private handleError(error: HttpErrorResponse) {   
    return throwError(() => new Error(error.error));
  }
}
