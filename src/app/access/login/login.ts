import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,           // <- serve per componenti standalone
  imports: [FormsModule, CommonModule, RouterModule],  // importa qui i moduli necessari
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  message = '';
    showPassword = false; // <-- aggiunto

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    // chiama il login offline fake
    const res = this.auth.login(this.email, this.password);

    if (!res.success) {
      this.message = res.message;
      return;
    }

    // login riuscito
    this.message = 'Accesso effettuato in modalità demo!';
    // reindirizza alla homepage (protetta da AuthGuard)
    this.router.navigate(['/']);
  }
}

