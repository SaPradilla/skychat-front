import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WhatisComponent } from './whatis/whatis.component';
import { ServicesComponent } from './services/services.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from '../../layout/footer/footer.component';



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    WelcomeComponent,
    WhatisComponent,
    ServicesComponent,
    FaqsComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
