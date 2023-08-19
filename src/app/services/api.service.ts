import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable({
  providedIn:'root'
})
export class ApiService {
  private readonly api = config.url;
  constructor(private readonly http:HttpClient) {}

  //metodos consumo de api

  getRoles(): Observable<any> {
    return this.http.get<any>(`${this.api}roles`);
  }
  getPuestos(): Observable<any> {
    return this.http.get<any>(this.api + 'puestos');
  }
  getSalarios(): Observable<any> {
    return this.http.get<any>(this.api + 'salarios');
  }
  getEmpleados(): Observable<any> {
    return this.http.get<any>(this.api + 'empleados');
  }
  createEmpleados(body:any): Observable<any> {
    return this.http.post<any>(this.api + 'empleados',body);
  }
  getAsistencias(): Observable<any> {
    return this.http.get<any>(this.api + 'asistencias');
  }
  createAsistencias(body:any): Observable<any> {
    return this.http.post<any>(this.api + 'asistencias',body);
  }


}
