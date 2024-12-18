import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-category-home',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './category-home.component.html',
  styleUrl: './category-home.component.css'
})
export class CategoryHomeComponent {
  @Input() products:any;
  @Input() title: any;

    ngOnInit(){
      console.log("products == "+ this.products[0])
    }

}
