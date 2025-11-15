import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Productpage } from './sections/productpage/productpage';
import { Login } from './access/login/login';
import { Register } from './access/register/register';
import { AuthGuard } from './guards/auth-guard';
import { Checkout } from './shop/checkout/checkout';
import { Category } from './sections/category/category';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Login },
  { path: 'category/:platform', component: Category },
  { path: 'register', component: Register },
  { path: 'checkout', component: Checkout, canActivate: [AuthGuard] },
  { path: 'product/:id', component: Productpage }
];
