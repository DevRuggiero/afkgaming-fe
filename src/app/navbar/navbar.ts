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

  filteredProducts: any[] = [];

  products = [
    { id: 'cyberpunk2077', name: 'Cyberpunk 2077', img: 'images/cyberpunk.jpg' },
    { id: 'superMarioOdissey', name: 'Super Mario Odyssey', img: 'images/SuperMarioOdissey.jpg' },
    { id: 'haloInfinite', name: 'Halo: Campaign Evolved', img: 'images/halo-evolved.jpg' },
  ];

  constructor(private router: Router, public cart: CartService, private productService: ProductService) { }

  ngOnInit() {
    this.cartSub = this.cart.items$.subscribe(items => {
      this.cartCount = items.length;
    });
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

  updateFilteredProducts() {
    const query = this._searchText.trim().toLowerCase();
    this.filteredProducts = query
      ? this.products.filter(p => p.name.toLowerCase().includes(query))
      : [];
  }

  searchProducts() {
    const allProducts = Object.entries(this.productService.getProducts())
      .map(([id, product]) => ({ id, ...product }));

    const firstProduct = allProducts.find(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase()) // <--- usa searchText
    );

    if (firstProduct) {
      this.router.navigate(['/product', firstProduct.id]);
      this.closeSearch();
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
