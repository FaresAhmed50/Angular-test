import { Component } from '@angular/core';
import {StarComponent} from '../star/star.component';

@Component({
  selector: 'app-about',
  imports: [
    StarComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutComponent {

}
