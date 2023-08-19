import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AsignarHorasComponent } from './pages/asignar-horas/asignar-horas.component';
import { CreateEmpleadoComponent } from './pages/create-empleado/create-empleado.component';
import { VerEmpleadosComponent } from './pages/ver-empleados/ver-empleados.component';
import { AuthGuard } from './guard/auth.guard';
import { NavComponent } from './pages/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: NavComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'asignar',
        component: AsignarHorasComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'crear-empleado',
        component: CreateEmpleadoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ver-empleados',
        component: VerEmpleadosComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
