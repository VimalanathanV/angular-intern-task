import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BurgerComponent} from './component/burger/burger.component';

const routes: Routes = [
  {
    path:'',
    component:BurgerComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BurgerRoutingModule { }
