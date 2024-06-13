import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';
import { FourComponent } from './pages/four/four.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'third-component', component: ThirdComponent },
  { path: 'four-component', component: FourComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // Optional: Redirect to the first component by default
  { path: '**', redirectTo: '/first-component', pathMatch: 'full' } // Optional: Wildcard route for a 404 page
];
