import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

  stars = Array(5).fill(0); // 5 stelle
  reviews = [
    {
      nome: 'Luca R.',
      img: 'https://i.pravatar.cc/60?img=1',
      testo: 'Servizio impeccabile! Tutto è stato rapido e sicuro. Consigliatissimo.'
    },
    {
      nome: 'Giulia M.',
      img: 'https://i.pravatar.cc/60?img=2',
      testo: 'Esperienza fantastica! Il sito è veloce e affidabile, tornerò sicuramente.'
    },
    {
      nome: 'Marco D.',
      img: 'https://i.pravatar.cc/60?img=3',
      testo: 'Ottimo servizio clienti e consegna super rapida. Cinque stelle!'
    }
  ];
}


