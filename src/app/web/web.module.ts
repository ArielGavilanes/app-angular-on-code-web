import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './dashboard/carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    WebComponent,
    DashboardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
    CarouselModule,
    ButtonModule,
    TagModule
  ]
})
export class WebModule { }
