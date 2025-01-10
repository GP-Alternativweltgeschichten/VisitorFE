import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PromptingComponent} from './prompting/prompting.component';
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'prompting', component: PromptingComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
