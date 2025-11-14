import { Routes } from '@angular/router';
import { Pc } from './sections/pc/pc';
import { Playstation } from './sections/playstation/playstation';
import { Xbox } from './sections/xbox/xbox';
import { Homepage } from './homepage/homepage';
import { Switch } from './sections/switch/switch';
import { Productpage } from './sections/productpage/productpage';

export const routes: Routes = [
  { path: '', component: Homepage },       // /
  { path: 'pc', component: Pc },           // /pc
  { path: 'playstation', component: Playstation }, // /playstation
  { path: 'xbox', component: Xbox },       // /xbox
  { path: 'switch', component: Switch },   // /switch

  // 🔥 ROUTE UNICA PER TUTTI I PRODOTTI
  { path: 'product/:id', component: Productpage }
];
