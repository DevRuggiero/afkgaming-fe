import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
    console.log('AuthGuard inizializzato (modalità demo/offline)');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const logged = this.auth.isLogged();
    console.log('AuthGuard: canActivate chiamato');
    console.log('AuthGuard: utente loggato?', logged);
    console.log('AuthGuard: stato.url ->', state.url);

    if (logged) {
      console.log('AuthGuard: accesso consentito');
      return true;
    }

    console.warn('AuthGuard: accesso negato - reindirizzo a /login');

    Swal.fire({
      toast: true,
      icon: 'warning',
      title: 'Accesso protetto. Effettua il login (modalità offline).',
      position: 'top',
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      background: '#0c1a3c',
      color: '#ffffff',
      customClass: {
        popup: 'swal-custom-popup',
        title: 'swal-title'
      }
    });

    this.router.navigate(['/login'], { queryParams: { redirectUrl: state.url } });
    console.log('AuthGuard: navigate a /login con redirectUrl ->', state.url);
    return false;
  }
}
