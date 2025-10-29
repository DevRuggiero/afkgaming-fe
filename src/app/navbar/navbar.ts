import { Component } from '@angular/core';
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

  constructor(private router: Router) {
    // Chiude automaticamente il search quando navighi
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showSearch = false;
      }
    });
  }
}
