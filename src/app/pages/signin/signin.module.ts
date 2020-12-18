import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './component/signin/signin.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ErrorBoxComponent } from './component/error-box/error-box.component';

import {SharedModule} from '../../shared_module/shared/shared.module'

@NgModule({
  declarations: [SigninComponent, ErrorBoxComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SigninModule { }
