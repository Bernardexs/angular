import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './interceptor/auth.interceptor';
import { SpinnerInterceptor } from './interceptor/spinner.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/nav/nav.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CreateEmpleadoComponent } from './pages/create-empleado/create-empleado.component';
import { AsignarHorasComponent } from './pages/asignar-horas/asignar-horas.component';
import { VerEmpleadosComponent } from './pages/ver-empleados/ver-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    PerfilComponent,
    CreateEmpleadoComponent,
    AsignarHorasComponent,
    VerEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,RouterModule,HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
