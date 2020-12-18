import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MenuPageComponent } from './component/menu-page/menu-page.component';

import {SharedModule} from '../../shared_module/shared/shared.module';


@NgModule({
  declarations: [MenuPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
