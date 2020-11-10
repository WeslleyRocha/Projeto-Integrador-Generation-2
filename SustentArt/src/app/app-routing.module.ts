import { HomeComponent } from './home/HomeComponent';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


const routes: Routes = [
  
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeComponent },

  { path:'sobre-nos', component: SobreNosComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
