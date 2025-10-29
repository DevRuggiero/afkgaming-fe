import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, NavigationStart } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  showSearch = false;
  searchText = '';
    scrolled = false;

  constructor(private router: Router) {
    // Chiude automaticamente il search quando navighi
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showSearch = false;
      }
    });
  }

     @HostListener('window:scroll', [])
  onWindowScroll() {
    // Semi-trasparente se scrollY > 0
    this.scrolled = window.scrollY > 0;
  }
}
