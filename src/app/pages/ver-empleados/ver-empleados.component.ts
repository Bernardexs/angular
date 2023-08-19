import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.scss']
})
export class VerEmpleadosComponent {
  empleados!:any
  constructor(private apiService:ApiService){
    this.apiService.getAsistencias().subscribe((data)=>{
      this.empleados=data.asistencias
    })
  }
}
