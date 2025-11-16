import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email = '';
  password = '';
  message = '';
  showPassword = false;

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    const res = this.auth.login(this.email, this.password);

    if (!res.success) {
      this.message = res.message;
      return;
    }
    this.message = 'Accesso effettuato in modalità demo!';
    this.router.navigate(['/']);
  }
}
