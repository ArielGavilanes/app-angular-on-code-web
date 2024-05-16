import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    FooterModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent
  ]
})

export class SharedModule { }
