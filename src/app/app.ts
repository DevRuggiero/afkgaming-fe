import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('afkgaming-fe');

  // Controllo visibilità navbar
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split('?')[0]; // Ignora query params
        this.showNavbar = !['/login', '/register', '/checkout'].includes(path);
      }
    });
  }
}
