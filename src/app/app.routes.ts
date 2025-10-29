import { Routes } from '@angular/router';
import { Pc } from './sections/pc/pc'; // La pagina PC
import { Playstation } from './sections/playstation/playstation'; // La pagina PlayStation
import { Xbox } from './sections/xbox/xbox'; // La pagina Xbox
import { Homepage } from './homepage/homepage';
import { Switch } from './sections/switch/switch';

export const routes: Routes = [
  { path: '', component: Homepage }, // Root del sito
  { path: 'pc', component: Pc }, // /pc
  { path: 'playstation', component: Playstation }, // /playstation
  { path: 'xbox', component: Xbox }, // /xbox
  {path: 'switch', component: Switch } //switch
];
