import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoEspecificoComponent } from './curso-especifico.component';
import { PortadaCursoComponent } from './portada-curso/portada-curso.component';
import { ContenidoCursoComponent } from './contenido-curso/contenido-curso.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    CursoEspecificoComponent,
    PortadaCursoComponent,
    ContenidoCursoComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    TreeSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
})
export class CursoEspecificoModule {}
