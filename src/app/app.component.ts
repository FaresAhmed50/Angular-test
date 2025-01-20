import { Component } from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  host: {'id' : 'main-root'},
  imports: [

    FooterComponent,
    RouterOutlet,
    NavComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Ass';
}
