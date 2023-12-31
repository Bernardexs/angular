import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn:'root'
})
export class ProtegerGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isLogin()) {
      return true;
    }
    return false;
  }
  isLogin(): boolean {
    if (!this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(['dashboard/home']);
    return false;
  }
}
