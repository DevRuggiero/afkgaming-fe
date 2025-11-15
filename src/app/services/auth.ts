import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private fakeUsers = [
    { email: 'test@test.com', password: '123456', name: 'Demo User' },
  ];

  private loggedUser: any = null;

  constructor() {
    console.log('AuthService inizializzato (modalità offline)');
  }

  login(email: string, password: string) {
    console.log('Tentativo login:', email, password);

    const user = this.fakeUsers.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      console.warn('Login fallito -> credenziali errate');
      return { success: false, message: 'Credenziali errate (modalità offline)' };
    }

    console.log('Login riuscito! Utente:', user);

    this.loggedUser = user;

    return { success: true, message: 'Login effettuato', user };
  }

  logout() {
    console.log('Logout eseguito. Utente precedente:', this.loggedUser);
    this.loggedUser = null;
  }

  isLogged(): boolean {
    console.log('isLogged()? ->', this.loggedUser !== null);
    return this.loggedUser !== null;
  }

  getLoggedUser() {
    console.log('getLoggedUser() ->', this.loggedUser);
    return this.loggedUser;
  }
}
