import { Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [MatExpansionModule,MatIconModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  readonly panelOpenState = signal(false);
}
