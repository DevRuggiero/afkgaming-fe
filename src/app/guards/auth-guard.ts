import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
    console.log('AuthGuard inizializzato (modalità demo/offline)');
  }

  canActivate(): boolean {
    console.log('AuthGuard: canActivate chiamato');
    const logged = this.auth.isLogged();
    console.log('AuthGuard: utente loggato?', logged);

    if (logged) {
      console.log('AuthGuard: accesso consentito');
      return true;
    }

    console.warn('AuthGuard: accesso negato - reindirizzo a /login');
    alert('Accesso protetto. Effettua il login (modalità offline).');

    this.router.navigate(['/login']);
    return false;
  }
}
