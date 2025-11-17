import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  login() {
    console.log('LoginComponent: login() chiamato');
    console.log('LoginComponent: queryParams ricevuti ->', this.route.snapshot.queryParams);

    const res = this.auth.login(this.email, this.password);

    if (!res.success) {
      console.log('LoginComponent: login fallito');
      this.message = res.message;
      return;
    }

    console.log('LoginComponent: login riuscito, utente ->', res.user);

    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';
    console.log('LoginComponent: redirectUrl ->', redirectUrl);

    this.router.navigateByUrl(redirectUrl);
  }

}
