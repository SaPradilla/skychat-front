import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-auth-bottons',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './auth-bottons.component.html',
  styleUrl: './auth-bottons.component.scss'
})
export class AuthBottonsComponent {

  constructor(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ){
    matIconRegistry.addSvgIcon(
      'github-icon',
      domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/github.svg")
    );
    matIconRegistry.addSvgIcon(
      'google-icon',
      domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/google.svg")
    );
  }

}
