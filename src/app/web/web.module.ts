import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    WebComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    DashboardModule
  ]
})
export class WebModule { }
