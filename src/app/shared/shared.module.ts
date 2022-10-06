import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from '../shared/search/search.component';
import { RatingComponent } from '../shared/rating/rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import {TranslationModule} from '../translation.module';




@NgModule({
  declarations: [
    RatingComponent,
    SearchComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TranslationModule,
  ],

  exports: [
    CommonModule,
    RatingComponent,
    SearchComponent

  ]
})
export class SharedModule { }