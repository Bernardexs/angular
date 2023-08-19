import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.scss'],
})
export class CreateEmpleadoComponent {
  roles: any;
  puestos: any;
  salarios: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.buildForm();
    this.apiService.getRoles().subscribe((data) => {
      this.roles = data.roles;
    });
    this.apiService.getSalarios().subscribe((data) => {
      this.salarios = data.salarios;
    });
    this.apiService.getPuestos().subscribe((data) => {
      this.puestos = data.puestos;
    });
  }
  loginForm!: FormGroup;
  buildForm() {
    this.loginForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      fecha_contratacion: ['', [Validators.required]],
      salario_id: ['', [Validators.required]],
      puesto_id: ['', [Validators.required]],
      rol_id: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
    });
  }
  crear(value: any) {
    if (this.loginForm.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.loginForm.controls).forEach((control) =>
        control.markAsTouched()
      );
      return;
    } else {
      this.apiService.createEmpleados(value).subscribe((data)=>{
        this.router.navigate(['/dashboard/ver-empleados']);
      },(err)=>{
        alert('ocurrio un error!')
      })

    }
  }
}
