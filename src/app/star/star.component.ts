import {Component, HostBinding, Input} from '@angular/core';
import {NgClass} from '@angular/common';

// @ts-ignore
@Component({
  selector: 'app-star',
  imports: [
    NgClass
  ],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css',
  styles:[

  ]
})
export class StarComponent  {

  bgcolor !: string;
  @Input() style: 'dark' | 'white' = 'white';
  // @HostBinding('style.--bgcolor') color = this.bgcolor;


  get iconColor(): string {
    this.bgcolor = this.style;
    return this.style === 'dark' ? 'text-dark' : 'text-white';
  }



}
