import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-asignar-horas',
  templateUrl: './asignar-horas.component.html',
  styleUrls: ['./asignar-horas.component.scss']
})
export class AsignarHorasComponent {
  trabajadores:any
  loginForm!:FormGroup
  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private apiService: ApiService,
  ) {
    this.apiService.getEmpleados().subscribe((data:any)=>{
      console.log(data.empleados)
      this.trabajadores=data.empleados;
    })
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      hora_entrada: ['', [Validators.required]],
      hora_salida: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      empleado_id: ['', [Validators.required]],
    });
  }
  crear(value: any) {
    if (this.loginForm.valid) {
      this.apiService.createAsistencias(value).subscribe((data:any)=>{
        this.router.navigate(['/dashboard/ver-empleados'])
      },()=>{
        alert('un error pasó')
      })
    } else {
      Object.values(this.loginForm.controls).forEach((control) =>
      control.markAsTouched(),
    );
    return;
    }
  }
}
