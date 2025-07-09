import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { MenuComponent } from './components/menu/menu';
import { QRCodeDisplayComponent } from './components/qr-code/qr-code';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'menu', component: MenuComponent },
  { path: '', component: QRCodeDisplayComponent }


];