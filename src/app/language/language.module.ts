import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { LanguageListComponent } from './language-list/language-list.component';

@NgModule({
  imports: [
    CommonModule,
    LanguageRoutingModule
  ],
  declarations: [LanguageListComponent]
})
export class LanguageModule { }
