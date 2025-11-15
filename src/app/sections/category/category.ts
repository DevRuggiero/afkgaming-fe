import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  selectedPlatform = '';
  products: Record<string, Product> = {};

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();

    this.route.paramMap.subscribe(params => {
      this.selectedPlatform = params.get('platform') ?? 'pc';
    });
  }

  get filteredProducts() {
    return Object.entries(this.products)
      .filter(([id, product]) => product.platforms?.includes(this.selectedPlatform))
      .map(([id, product]) => ({ id, ...product }));
  }
}
