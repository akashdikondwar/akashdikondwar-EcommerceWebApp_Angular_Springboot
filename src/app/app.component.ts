import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./Modules/shared/footer/footer.component";
import { HeaderComponent } from './Modules/shared/header/header.component';
import { HomeComponent } from './Modules/featured/home/home.component';
import { CarouselComponent } from './Modules/featured/carousel/carousel.component';
import { ProductComponent } from './Modules/featured/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, HomeComponent, HeaderComponent, FooterComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
