import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cartmodal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cartmodal.html',
  styleUrls: ['./cartmodal.css'],
})
export class Cartmodal {
  @Output() close = new EventEmitter<void>();

  constructor(public cart: CartService, private router: Router) { }

  svuotaCarrello() {
    this.cart.clearCart();
  }

  get isCartEmpty(): boolean {
    return this.cart.getItems().length === 0;
  }


  checkout() {
    this.close.emit();
    this.router.navigate(['/checkout']);
  }

  getCartSummary() {
    const summary: { product: any; quantity: number }[] = [];
    const map = new Map<string, { product: any; quantity: number }>();

    this.cart.getItems().forEach(p => {
      if (map.has(p.name)) {
        map.get(p.name)!.quantity += 1;
      } else {
        map.set(p.name, { product: p, quantity: 1 });
      }
    });

    return Array.from(map.values());
  }
}
