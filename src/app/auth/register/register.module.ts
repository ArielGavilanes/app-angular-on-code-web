import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterGreetingComponent } from './register-greeting/register-greeting.component';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeModule } from 'primeng/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    RegisterGreetingComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    TreeSelectModule,
    TreeModule,
    BrowserAnimationsModule,
    PasswordModule,
  ]
})
export class RegisterModule { }
