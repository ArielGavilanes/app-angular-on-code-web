import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../state/effects/auth.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginModule,
    RegisterModule,
    EffectsModule.forRoot([AuthEffects]),
  ],
})
export class AuthModule {}
