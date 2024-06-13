import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent  {

//  value : any;

//  constructor(){}
//  ngOnInit(): void {
   
//  }

//  getNameEntered(){
//   console.log("the name is"+this.value)
//  }
  userData = {
    name: '',
    email: '',
    password: ''
  };
  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.userData);
    // You can add further logic to submit data to an API or perform validation
  }
}
