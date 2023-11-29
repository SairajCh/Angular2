import { MatToolbarModule,MatToolbarRow } from '@angular/material/toolbar';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../sharedmodule/global-constants';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  password=true;
  confirmPassword =true;
  signupForm:any = FormGroup;
  responseMessage:any;

  constructor(private UserService:UserService,
        private formBuilder:FormBuilder,
        private router:Router,
        private snackbarService:SnackbarService,
        private dialogRef:MatDialogRef<SignupComponent>,
        private ngxService:NgxUiLoaderService
        ){}

  ngOnInit(): void {

    this.signupForm =new FormGroup({

      name:new FormControl("",[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]),
      email:new FormControl("",[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]),
      contactNumber: new FormControl("",[Validators.required,Validators.pattern(GlobalConstants.contactNumberRegex)]),

      password: new FormControl("",[Validators.required]),

      confirmPassword: new FormControl("",[Validators.required]),


      // email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],

      // contactNumber:[null,[Validators.required,Validators.pattern(GlobalConstants.contactNumberRegex)]],

      // password:[null,[Validators.required]],
      
      // confirmpassword:[null,[Validators.required]]

    })
    
  }



  validateSubmit(){
    if(this.signupForm.controls['password'].value != this.signupForm.controls['confirmPassword'].value){
      return true;
    }else{
      return false;

    }

  }

  handleSubmit(){
    this.ngxService.start();
    var formData = this.signupForm.value;

    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      password: formData.password
    }

    this.UserService.signup(data).subscribe((response:any) => {
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage= response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"");
      this.router.navigate(['/']);
    },(error)=>{
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;

        
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);

    }




    )

  }




}
