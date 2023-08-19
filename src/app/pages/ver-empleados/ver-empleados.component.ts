import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.scss']
})
export class VerEmpleadosComponent {
  empleados!:any
  rol!:any
  search:any;
  constructor(private apiService:ApiService){
      this.getAsistencias()
    this.rol=localStorage.getItem('rol')
  }
  getAsistencias(){
    this.apiService.getAsistencias().subscribe((data)=>{
      this.empleados=data.asistencias
    })
  }
  eliminarRegistro(id:any){
    this.apiService.deleteAsistencias(id).subscribe((data)=>{
      this.getAsistencias()

    },()=>{
      alert('ocurrio un error')
    })
  }
}
