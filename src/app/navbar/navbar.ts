import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartService } from '../services/cart';
import { Cartmodal } from '../shop/cartmodal/cartmodal';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule, Cartmodal],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit, OnDestroy {
  showSearch = false;
  _searchText = '';
  scrolled = false;
  showCart = false;
  cartCount = 0;

  private cartSub!: Subscription;

  /** 🔥 lista prodotti reali caricati dal ProductService */
  allProducts: { id: string; name: string; img: string }[] = [];

  /** risultati della ricerca */
  filteredProducts: any[] = [];

  constructor(
    private router: Router,
    public cart: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // Aggiorna il conteggio del carrello
    this.cartSub = this.cart.items$.subscribe(items => {
      this.cartCount = items.length;
    });

    // 🔥 carica i prodotti dal service
    const data = this.productService.getProducts();
    this.allProducts = Object.entries(data).map(([id, p]) => ({
      id,
      name: p.name,
      img: p.img
    }));
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }

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

  /** 🔍 Filtra i prodotti */
  updateFilteredProducts() {
    const q = this._searchText.trim().toLowerCase();

    this.filteredProducts = q
      ? this.allProducts.filter(p => p.name.toLowerCase().includes(q))
      : [];
  }

  /** 🔎 Ricerca premi invio */
  searchProducts() {
    const q = this.searchText.toLowerCase();

    const match = this.allProducts.find(p =>
      p.name.toLowerCase().includes(q)
    );

    if (match) {
      this.goToProduct(match.id);
    }
  }

  goToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
    this.closeSearch();
  }

  closeSearch() {
    this.showSearch = false;
    this._searchText = '';
    this.filteredProducts = [];
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }
}
