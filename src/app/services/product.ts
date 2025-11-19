import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Record<string, Product> = {
    cyberpunk2077: {
      name: 'Cyberpunk 2077: Ultimate Edition',
      price: '60.80 €',
      fullPrice: '76.00 €',
      discount: '-20%',
      img: 'images/cyberpunk.jpg',
      images: ['images/cyber3.jpg', 'images/cyber.jpg'],
      description: 'Ambientato nella metropoli di Night City, Cyberpunk 2077 è un RPG open world con narrativa immersiva, combattimenti, hacking e scelte morali che plasmano il destino dei personaggi.',
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
      images: ['images/mario2.png', 'images/mario3.jpg'],
      description: 'Mario esplora regni incredibili con nuove abilità e il fedele Cappy in un’avventura platform 3D piena di segreti, sfide e mondi sorprendenti.',
      developer: 'Nintendo EPD',
      publisher: 'Nintendo',
      releaseDate: '27 ottobre 2017',
      genre: 'Platform',
      reviews: 4500,
      tags: ['Platform', 'Avventura', 'Family'],
      countryCompatibility: 'Global',
      installation: 'Console Nintendo Switch',
      platforms: ['switch']
    },

    haloCampaignEvolved: {
      name: 'Halo: Campaign Evolved',
      price: '56.90 €',
      fullPrice: '71.12 €',
      discount: '-20%',
      img: 'images/halo-evolved.jpg',
      images: ['images/halo2.jpg', 'images/haloimage.jpg'],
      description: 'Il leggendario sparatutto FPS che ha dato inizio alla saga Halo. Segui Master Chief attraverso la campagna originale e vivi una combinazione di azione, esplorazione e narrativa epica.',
      developer: 'Bungie',
      publisher: 'Microsoft Game Studios',
      releaseDate: '15 novembre 2001',
      genre: 'FPS',
      reviews: 5200,
      tags: ['FPS', 'Azione', 'Sci-Fi'],
      countryCompatibility: 'Global',
      installation: 'PC / Xbox',
      platforms: ['pc', 'xbox']
    },
    bloodborne: {
      name: 'Bloodborne',
      price: '54.90 €',
      fullPrice: '59.99 €',
      discount: '-8%',
      img: 'images/Bloodborne.jpg',
      images: ['images/blood2.jpg', 'images/blood1.jpg'],
      description: 'Un inquietante gioco d’azione RPG gotico ambientato nella città maledetta di Yharnam, sviluppato da FromSoftware.',
      developer: 'FromSoftware & Japan Studio',
      publisher: 'Sony Computer Entertainment',
      releaseDate: '24 marzo 2015',
      genre: 'Action, RPG',
      reviews: 10000,
      tags: ['Action', 'Soulslike', 'RPG', 'Horror'],
      countryCompatibility: 'Global',
      installation: 'PlayStation Store',
      platforms: ['playstation']
    },

    eldenRing: {
      name: 'Elden Ring',
      price: '59.90 €',
      fullPrice: '69.99 €',
      discount: '-14%',
      img: 'images/eldenring.jpg',
      images: ['images/elden.jpeg', 'images/elden1.jpg'],
      description: 'Un vasto open world fantasy action-RPG creato da FromSoftware e George R. R. Martin.',
      developer: 'FromSoftware',
      publisher: 'Bandai Namco Entertainment',
      releaseDate: '25 febbraio 2022',
      genre: 'Action RPG',
      reviews: 20000,
      tags: ['RPG', 'Open World', 'Fantasy'],
      countryCompatibility: 'Global',
      installation: 'Steam / PlayStation / Xbox',
      platforms: ['pc', 'playstation', 'xbox']
    },

    deadSpace: {
      name: 'Dead Space',
      price: '29.90 €',
      fullPrice: '39.99 €',
      discount: '-25%',
      img: 'images/deadspace.jpg',
      images: ['images/dead.jpg', 'images/dead1.jpg'],
      description: 'Remake dell’horror survival sci-fi originale. Combatte la minaccia necromorfa a bordo della USG Ishimura.',
      developer: 'Motive Studio',
      publisher: 'Electronic Arts',
      releaseDate: '27 gennaio 2023',
      genre: 'Survival Horror',
      reviews: 8000,
      tags: ['Horror', 'Sci-Fi', 'Survival'],
      countryCompatibility: 'Global',
      installation: 'Steam / Xbox Series / PlayStation',
      platforms: ['pc', 'xbox']
    },

    massEffect: {
      name: 'Mass Effect',
      price: '49.90 €',
      fullPrice: '59.99 €',
      discount: '-17%',
      img: 'images/mass-effect.jpg',
      images: ['images/mass.jpg', 'images/mass1.jpg'],
      description: 'La saga spaziale RPG di BioWare: esplora la galassia, prendi decisioni epiche e combatti per il destino dell’umanità.',
      developer: 'BioWare',
      publisher: 'Electronic Arts',
      releaseDate: '20 novembre 2007',
      genre: 'RPG, Sci-Fi',
      reviews: 15000,
      tags: ['Sci-Fi', 'RPG', 'Avventura', 'Decision Making'],
      countryCompatibility: 'Global',
      installation: 'Steam / Xbox / PlayStation',
      platforms: ['pc', 'xbox', 'playstation']
    },

    seaOfThieves: {
      name: 'Sea of Thieves',
      price: '39.90 €',
      fullPrice: '49.90 €',
      discount: '-20%',
      img: 'images/sot.jpg',
      images: ['images/sot1.jpg', 'images/sot2.jpg'],
      description: 'Un gioco d’avventura multiplayer in prima persona dove diventi un pirata. Esplora mari aperti, saccheggia tesori, affronta nemici e vivi avventure condivise con altri giocatori.',
      developer: 'Rare',
      publisher: 'Xbox Game Studios',
      releaseDate: '20 marzo 2018',
      genre: 'Adventure, Multiplayer',
      reviews: 5000,
      tags: ['Avventura', 'Multiplayer', 'Pirati'],
      countryCompatibility: 'Global',
      installation: 'PC / Xbox',
      platforms: ['pc', 'xbox']
    },
    animalCrossingNewHorizons: {
      name: 'Animal Crossing: New Horizons',
      price: '59.90 €',
      fullPrice: '69.90 €',
      discount: '-14%',
      img: 'images/ac.jpg',
      images: ['images/ac1.jpg', 'images/ac2.jpg'],
      description: 'Crea la tua isola dei sogni e personalizza ogni dettaglio. Interagisci con simpatici abitanti animali, esplora, pesca, colleziona risorse e vivi una vita rilassante con amici locali o online.',
      developer: 'Nintendo EPD',
      publisher: 'Nintendo',
      releaseDate: '20 marzo 2020',
      genre: 'Simulazione, Life Simulation',
      reviews: 12000,
      tags: ['Simulazione', 'Life Simulation', 'Family', 'Social'],
      countryCompatibility: 'Global',
      installation: 'Console Nintendo Switch',
      platforms: ['switch']
    }
  };

  getProducts(): Record<string, Product> {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products[id];
  }

  getProductsByPlatform(platform: string): { id: string; product: Product }[] {
    return Object.entries(this.products)
      .filter(([id, product]) => product.platforms?.includes(platform))
      .map(([id, product]) => ({ id, product }));
  }
}
