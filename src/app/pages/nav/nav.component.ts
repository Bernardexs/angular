import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  user!:any
  constructor(private authService:AuthService,private route:Router){
    this.authService.userInformation().subscribe((data)=>{
      this.user=data.user;
      this.authService.setRol(this.user.rol.nombre)
    })
  }
  logout(){
    this.authService.logout().subscribe(data=>{
      this.authService.deleteToken();
      this.authService.deleteRol();

      this.route.navigate(['/login']);
    });
  }
}
