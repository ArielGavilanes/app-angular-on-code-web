import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DashboardComponent } from './dashboard.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, CarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    SharedModule
  ],
})
export class DashboardModule {}
