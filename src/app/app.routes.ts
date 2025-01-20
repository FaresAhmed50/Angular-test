import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

export const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: "About" , component: AboutComponent},
  {path: "contact" , component: ContactComponent},
  {path: "portfolio", component: PortfolioComponent},

];
