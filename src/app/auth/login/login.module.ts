import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginGreetingComponent } from './login-greeting/login-greeting.component';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeModule } from 'primeng/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, LoginGreetingComponent],
  imports: [
    CommonModule,
    InputTextModule,
    TreeSelectModule,
    TreeModule,
    BrowserAnimationsModule,
    PasswordModule,
    RouterModule,
    ReactiveFormsModule,
    MessagesModule
  ],
})
export class LoginModule {}
