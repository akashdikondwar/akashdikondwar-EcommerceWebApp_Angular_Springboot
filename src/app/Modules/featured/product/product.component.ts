import { Component } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { mens_kurta } from '../../../../data/men_kurta';
import { NgFor } from '@angular/common';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

// import { initMDB } from "mdb-angular-ui-kit";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, NgFor, MdbDropdownModule, MdbRippleModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products = mens_kurta.slice(0,10);

  ngOnInit(){
  }

}
