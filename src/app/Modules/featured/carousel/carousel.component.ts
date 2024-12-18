import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MdbCarouselModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {


  imageList:any[]=
  [ 
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/DecWRS/ATF/Unrec/PC/5._CB540884137_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/SVD/Dec/Skincare_PCn._CB540861816_.jpg'
  ]

  
}
