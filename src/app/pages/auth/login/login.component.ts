import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule   } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthBottonsComponent } from '../auth-bottons/auth-bottons.component';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavbarComponent,
    AuthBottonsComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  errroMsg!:string;
  isLoading:boolean = false;


  constructor(){

  }


  ngOnInit(): void {
  
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)])
    });

  }



  submit(): void{


    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }

  }

}
