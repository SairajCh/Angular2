import { SharedModule } from './../../../frontend/src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { NgxUiLoaderConfig,SPINNER , NgxUiLoaderModule} from 'ngx-ui-loader';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FlexLayoutModule } from '@angular/flex-layout' 

const ngUiLoaderConfig: NgxUiLoaderConfig={
  text:"Loading....",
  textColor:"#FFFFFF",
  textPosition:"center-center",
  bgsColor:"#7b1fa2",
  fgsColor:"#7b1fa2",
  fgsType: SPINNER.squareJellyBox,
  fgsSize:100,
  hasProgressBar:false



}


@NgModule({
  declarations: [
    AppComponent,
    BestSellerComponent,
    DashboardComponent,
    HomeComponent,
    SignupComponent,
    ForgotPasswordComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedmoduleModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
