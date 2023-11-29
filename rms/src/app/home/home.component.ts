import { Component, OnInit } from '@angular/core';

import {MatDialog,MatDialogConfig,MatDialogTitle} from '@angular/material/dialog'
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog){}

  ngOnInit(): void {
    
  }

  handleSignupAction(){
    let dialogRef = this.dialog.open(SignupComponent);
    

  }

  handleForgotPasswordAction(){
    this.dialog.open(ForgotPasswordComponent,{
      width:"650px",
      height:"550px"
    });

  }



}
