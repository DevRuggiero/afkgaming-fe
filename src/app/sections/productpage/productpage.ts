import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../../footer/footer';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productpage',
  imports: [CommonModule, Footer, RouterModule, FormsModule],
  templateUrl: './productpage.html',
  styleUrl: './productpage.css',
})
export class Productpage {

  product!: Product;
  selectedQuantity = 1;

  products: Record<string, Product> = {};

  currentImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';

      this.product = this.productService.getProductById(id) ?? {
        name: 'Prodotto non trovato',
        price: '',
        fullPrice: '',
        discount: '',
        img: 'images/placeholder.jpg',
        images: [],
        description: '',
        developer: '',
        publisher: '',
        releaseDate: '',
        genre: '',
        reviews: 0,
        tags: [],
        countryCompatibility: '',
        installation: '',
        platforms: []
      };

      this.currentImageIndex = 0;
    });
  }


  getStars(reviews: number = 0): string[] {
    const starsCount = Math.min(5, Math.floor(reviews / 1000));
    const halfStar = (reviews % 1000 >= 500 && starsCount < 5) ? 1 : 0;
    const fullStars = Array(starsCount).fill('★');
    const halfStars = halfStar ? ['½'] : [];
    const emptyStars = Array(5 - starsCount - halfStar).fill('☆');
    return [...fullStars, ...halfStars, ...emptyStars];
  }

  addToCart() {
    if (!this.product) return;

    const quantity = Math.max(1, Math.floor(this.selectedQuantity));
    this.cartService.addToCart(this.product, quantity);

    Swal.fire({
      toast: true,               
      icon: 'success',
      title: `${quantity}× ${this.product.name} aggiunto al carrello`,
      position: 'top',             

      showConfirmButton: false,
      timer: 4000,                 
      timerProgressBar: true,

      background: '#0c1a3c',      
      color: '#ffffff',            

      customClass: {
        popup: 'swal-custom-popup',
        title: 'swal-title'
      }
    });
  }



  get currentImage(): string {
    if (!this.product.images || this.product.images.length === 0) return this.product.img;
    return this.product.images[this.currentImageIndex];
  }

  nextImage() {
    if (!this.product.images) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage() {
    if (!this.product.images) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }
}
