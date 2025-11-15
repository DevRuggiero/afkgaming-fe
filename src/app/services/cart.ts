import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Product[] = [];
  public items$ = new BehaviorSubject<Product[]>([]);

  constructor() { }

  // Nel CartService
  addToCart(product: Product, quantity: number = 1) {
    for (let i = 0; i < quantity; i++) {
      this.items.push(product);
    }
    this.items$.next(this.items);
    console.log(`Aggiunti ${quantity} ${product.name} al carrello`);
    console.log('Carrello attuale:', this.items.map(p => p.name));
  }


  // Restituisce gli items correnti
  getItems(): Product[] {
    return this.items;
  }

  // Restituisce il totale
  getTotal(): number {
    const total = this.items.reduce((sum, p) => {
      const priceNum = parseFloat(p.price.replace('€', '').replace(',', '.').trim());
      return sum + priceNum;
    }, 0);
    return Math.round(total * 100) / 100;
  }

  // Svuota il carrello 
  clearCart() {
    this.items = [];
    this.items$.next(this.items);
    console.log('Carrello svuotato');
  }
}
