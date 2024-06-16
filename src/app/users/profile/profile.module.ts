import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBannerComponent } from './profile-banner/profile-banner.component';
import { ProfileCursosComponent } from './profile-cursos/profile-cursos.component';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    ProfileBannerComponent,
    ProfileCursosComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TabViewModule,
    ButtonModule,
    DataViewModule,
    RouterModule,
    ChartModule
  ],
})
export class ProfileModule {}
