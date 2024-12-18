import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CategoryHomeComponent } from "../category-home/category-home.component";
import { mens_kurta } from '../../../../data/men_kurta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CategoryHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
products=mens_kurta.slice(0,4);
}
