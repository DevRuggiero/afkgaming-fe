import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class Homepage {
   menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
