import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private fakeUsers = [
    { email: 'test@test.com', password: '123456', name: 'Demo User' },
  ];

  private loggedUser: any = null;
  private lastLoggedState: boolean | null = null;

  constructor() {
    console.log('AuthService inizializzato (modalità offline)');

    // 🔹 Carica utente loggato dal localStorage
    const savedUser = localStorage.getItem('loggedUser');
    if (savedUser) {
      this.loggedUser = JSON.parse(savedUser);
      console.log('Utente loggato caricato da localStorage:', this.loggedUser);
    }
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
    localStorage.setItem('loggedUser', JSON.stringify(user));

    return { success: true, message: 'Login effettuato', user };
  }

  logout() {
    console.log('Logout eseguito. Utente precedente:', this.loggedUser);
    this.loggedUser = null;
    localStorage.removeItem('loggedUser');
  }

  isLogged(): boolean {
    const state = this.loggedUser !== null;
    if (state !== this.lastLoggedState) {
      console.log('isLogged()? ->', state);
      this.lastLoggedState = state;
    }
    return state;
  }

  getLoggedUser() {
    console.log('getLoggedUser() ->', this.loggedUser);
    return this.loggedUser;
  }
}
