import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  user!:any
  constructor(private authService:AuthService){
    this.authService.userInformation().subscribe((data)=>{
      this.user=data.user;
    })
  }
}
