import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyListComponent } from './currency-list/currency-list.component';

@NgModule({
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ],
  declarations: [CurrencyListComponent]
})
export class CurrencyModule { }
