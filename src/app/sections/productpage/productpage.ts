import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../../footer/footer';

interface Product {
  name: string;
  fullPrice: string;
  price: string;
  discount: string;
  img: string;
  description?: string;
  developer?: string;
  publisher?: string;
  releaseDate?: string;
  genre?: string;
  reviews?: number;
  tags?: string[];
  countryCompatibility?: string;
  installation?: string;
  platforms?: string[];
}

@Component({
  selector: 'app-productpage',
  imports: [CommonModule, Footer],
  templateUrl: './productpage.html',
  styleUrl: './productpage.css',
})
export class Productpage {

  product!: Product;

  products: Record<string, Product> = {
    cyberpunk2077: {
      name: 'Cyberpunk: Ultimate Edition',
      price: '60.80 €',
      fullPrice: '76.00 €',
      discount: '-20%',
      img: 'images/cyberpunk.jpg',
      description: 'Come governatore di Night City, plasmerai il destino dei tuoi cittadini e sfiderai rivali potenti. Scopri l\'esperienza top di Cyberpunk con combattimenti, hacking e narrativa immersiva.',
      developer: 'CD Projekt Red',
      publisher: 'CD Projekt',
      releaseDate: '10 dicembre 2020',
      genre: 'RPG, Azione, Open World',
      reviews: 5000,
      tags: ['RPG', 'Open World', 'Cyberpunk', 'Azione'],
      countryCompatibility: 'Global',
      installation: 'Steam o GOG Galaxy',
      platforms: ['pc', 'playstation', 'xbox', 'switch']
    },
    superMarioOdissey: {
      name: 'Super Mario Odyssey',
      price: '49.90 €',
      fullPrice: '55.50 €',
      discount: '-10%',
      img: 'images/SuperMarioOdissey.jpg',
      description: 'Un’avventura 3D con Mario che esplora regni incredibili con nuove abilità e il fedele Cappy.',
      developer: 'Nintendo',
      publisher: 'Nintendo',
      releaseDate: '27 ottobre 2017',
      genre: 'Platform',
      reviews: 4500,
      tags: ['Platform', 'Avventura', 'Family'],
      countryCompatibility: 'Global',
      installation: 'Console Nintendo Switch',
      platforms: ['switch']
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.product = this.products[id] ?? {
      name: 'Prodotto non trovato',
      price: '',
      fullPrice: '',
      discount: '',
      img: 'images/placeholder.jpg',
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
  }


  getStars(reviews: number = 0): string[] {

    const starsCount = Math.min(5, Math.floor(reviews / 1000));
    const halfStar = (reviews % 1000 >= 500 && starsCount < 5) ? 1 : 0;
    const fullStars = Array(starsCount).fill('★');
    const halfStars = halfStar ? ['½'] : [];
    const emptyStars = Array(5 - starsCount - halfStar).fill('☆');
    return [...fullStars, ...halfStars, ...emptyStars];
  }

}
