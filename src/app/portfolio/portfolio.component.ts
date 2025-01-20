import { Component } from '@angular/core';
import {StarComponent} from "../star/star.component";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [
    StarComponent,
    NgClass
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images: string[] = [
    "./poert1.png",
    "./port2.png",
    "./port3.png",
    "./poert1.png",
    "./port2.png",
    "./port3.png"
  ]

}
