import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout implements OnInit {

  cartProducts: (Product & { code: string; quantity?: number })[] = [];

  loading = false;
  message = '';
  orderCompleted = false;
  showCode = false;
  copied = false;
  singleProductCheckout = false;


  card = {
    number: '',
    name: '',
    exp: '',
    cvv: ''
  };

  demoCard = {
    number: '4111 1111 1111 1111',
    name: 'Demo User',
    exp: '12/30',
    cvv: '123'
  };

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
  const queryParams = this.route.snapshot.queryParams;
  const productId = queryParams['productId'];
  const quantity = Number(queryParams['quantity'] || 1);

  if (productId) {
    const product = this.productService.getProductById(productId);
    if (product) {
      // Checkout temporaneo con solo questo prodotto
      this.cartProducts = [{ ...product, code: this.generateCode(), quantity }];
      this.singleProductCheckout = true; // <-- flag per acquisto singolo
      return;
    }
  }

  // Se non ci sono query params, usa il carrello normale
  this.cartProducts = this.cartService.getItems().map(p => ({
    ...p,
    code: this.generateCode()
  }));
  this.singleProductCheckout = false; // <-- flag per carrello normale
}


 acquista() {
  this.loading = true;
  this.message = '';
  this.orderCompleted = false;

  setTimeout(() => {
    if (
      this.card.number === this.demoCard.number &&
      this.card.name === this.demoCard.name &&
      this.card.exp === this.demoCard.exp &&
      this.card.cvv === this.demoCard.cvv
    ) {
      this.orderCompleted = true;
      this.message = '';

      // 🔹 Salvataggio prodotti acquistati nel localStorage
      const saved = JSON.parse(localStorage.getItem("purchasedCodes") || "[]");
      console.log('Prodotti già salvati:', saved);

      const newItems = this.cartProducts.map(p => ({
        name: p.name,
        code: p.code
      }));
      console.log('Nuovi prodotti da salvare:', newItems);

      localStorage.setItem("purchasedCodes", JSON.stringify([...saved, ...newItems]));
      console.log('LocalStorage aggiornato:', localStorage.getItem("purchasedCodes"));

      // Svuota il carrello solo se NON è acquisto singolo
      if (!this.singleProductCheckout) {
        this.cartService.clearCart();
        localStorage.removeItem('cart');
      }

    } else {
      this.message = 'Dati carta non validi (demo). Riprova.';
      console.log('Carta non valida:', this.card);
    }
    this.loading = false;
  }, 1000);
}


  generateCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 12; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code.match(/.{1,4}/g)!.join('-');
  }

  toggleCode() {
    this.showCode = !this.showCode;
  }

  copyCode() {
    if (!this.showCode) return;
    const codes = this.cartProducts.map(p => p.code).join(', ');

    navigator.clipboard.writeText(codes).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
