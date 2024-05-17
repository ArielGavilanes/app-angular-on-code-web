import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBannerComponent } from './profile-banner/profile-banner.component';
import { ProfileCursosComponent } from './profile-cursos/profile-cursos.component';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    ProfileBannerComponent,
    ProfileCursosComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ]
})
export class ProfileModule { }
