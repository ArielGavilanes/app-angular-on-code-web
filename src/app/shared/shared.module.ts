import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, SidebarModule, ButtonModule, MenubarModule],
  exports: [SidebarComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {}
