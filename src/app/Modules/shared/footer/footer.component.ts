import { Component } from '@angular/core';
import { MdbFormControlComponent, MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MdbFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
