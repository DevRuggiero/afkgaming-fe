import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout implements OnInit {

  cartProducts: (Product & { code: string })[] = [];

  loading = false;
  message = '';
  orderCompleted = false;
  showCode = false;
  copied = false;

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

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getItems().map(p => ({
      ...p,
      code: this.generateCode()
    }));
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
        this.cartService.clearCart();
      } else {
        this.message = 'Dati carta non validi (demo). Riprova.';
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
