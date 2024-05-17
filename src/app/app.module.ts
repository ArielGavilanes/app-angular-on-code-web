import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { AuthEffects } from './state/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { CategoriasModule } from './categorias/categorias.module';
import { SearchEffects } from './state/effects/search.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'Test' }),
    CategoriasModule,
    EffectsModule.forRoot([AuthEffects, SearchEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
