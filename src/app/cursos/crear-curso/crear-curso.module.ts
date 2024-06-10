import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearCursoRoutingModule } from './crear-curso-routing.module';
import { CrearCursoComponent } from './crear-curso.component';
import { Paso1Component } from './paso-1/paso-1.component';
import { Paso2Component } from './paso-2/paso-2.component';
import { Paso3Component } from './paso-3/paso-3.component';
import { StepsModule } from 'primeng/steps';
import { MessagesModule } from 'primeng/messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    CrearCursoComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component,
  ],
  imports: [
    CommonModule,
    CrearCursoRoutingModule,
    StepsModule,
    MessagesModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    TreeSelectModule,
    TreeModule,
    ButtonModule,
    FormsModule,
    CheckboxModule,
    InputNumberModule,
    FileUploadModule,
  ],
})
export class CrearCursoModule {}
