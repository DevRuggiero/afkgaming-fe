import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Semi-trasparente se scrollY > 0
    this.scrolled = window.scrollY > 0;
  }
}
