import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { NextPreviousScrollBarComponent } from './home/next-previous-scroll-bar/next-previous-scroll-bar.component';
import { NextPreviousScrollableDirective } from './home/next-previous-scroll-bar/next-previous-scrollable.directive';


@NgModule({
  declarations: [
    HomeComponent,
    NextPreviousScrollBarComponent,
    NextPreviousScrollableDirective
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
