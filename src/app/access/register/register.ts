import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  message = 'La registrazione non è disponibile in modalità offline.';

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
