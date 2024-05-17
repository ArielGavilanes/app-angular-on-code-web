import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
