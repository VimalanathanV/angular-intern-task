import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path : 'main-page',
    loadChildren:()=>
      import('./pages/main-page/main-page.module').then(
        (m)=>m.MainPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
