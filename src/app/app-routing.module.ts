import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'currency',
    loadChildren: () => import('./modules/currency/currency.module').then(mod => mod.CurrencyModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./modules/language/language.module').then(mod => mod.LanguageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
