import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
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
  _searchText = '';
  scrolled = false;

  filteredProducts: any[] = [];

  products = [
    { id: 'cyberpunk2077', name: 'Cyberpunk 2077', img: 'images/cyberpunk.jpg' },
    { id: 'superMarioOdissey', name: 'Super Mario Odyssey', img: 'images/SuperMarioOdissey.jpg' },
    { id: 'haloInfinite', name: 'Halo Infinite', img: 'images/halo-evolved.jpg' },
  ];

  constructor(private router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  set searchText(value: string) {
    this._searchText = value;
    this.updateFilteredProducts();
  }

  get searchText(): string {
    return this._searchText;
  }

  updateFilteredProducts() {
    const query = this._searchText.trim().toLowerCase();
    if (!query) {
      this.filteredProducts = [];
      return;
    }

    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(query)
    );
  }

  searchProducts() {
    if (this.filteredProducts.length === 0) return;

    // Prendi il primo prodotto dalla lista filtrata
    const firstProduct = this.filteredProducts[0];

    // Naviga alla sua pagina
    this.router.navigate(['/product', firstProduct.id]);

    // Chiudi overlay e resetta input
    this.showSearch = false;
    this._searchText = '';
    this.filteredProducts = [];
  }


  // 🔹 NUOVO METODO
  goToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
    this.showSearch = false;
    this._searchText = '';
    this.filteredProducts = [];
  }
}
