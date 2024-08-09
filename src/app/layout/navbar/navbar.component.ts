import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { NavigationEnd, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showOptions:boolean = true;
  nextRoute:string = '';

  showMenuMobile:boolean|null = null;

  constructor(private router:Router){


    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        this.nextRoute = val.url
        if(val.url === '/login' || val.url === '/register'){
          this.showOptions = false;
        }
      }
    })

  }

  redirect():void{
    this.router.navigate(
      [this.nextRoute === '/register' 
        ? '/login' 
        : '/register'
      ]
    )
  }

  redirectHome():void{
    this.router.navigate(['/'])
  }

  toggleMenuMobile():void{
    if(this.showMenuMobile === null ) this.showMenuMobile = true
    else{
      this.showMenuMobile = !this.showMenuMobile
    }

  }

}
