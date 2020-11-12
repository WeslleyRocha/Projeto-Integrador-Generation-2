import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/HomeComponent';
// import {HomeComponent} from './home/home.component';

import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path:'sobre-nos', component: SobreNosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
