import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-portada-curso',
  templateUrl: './portada-curso.component.html',
  styleUrls: ['./portada-curso.component.css'],
})
export class PortadaCursoComponent implements OnInit {
  editCourseForm: FormGroup = new FormGroup({});
  @Input() curso: any;

  constructor(private formBuilder: FormBuilder) {
    this.editCourseForm = this.formBuilder.group({
      nombre_curso: ['', [Validators.required]],
      descripcion_curso: ['', [Validators.required]],
      // portada_curso: ['',],
    });
  }

  @Input() id_rol: number | null = 0;

  @Input() permission: boolean = false;

  visible: boolean = false;

  formSubmitted: boolean = false;

  @Output() emitirData: EventEmitter<any> = new EventEmitter<any>();

  dataForUpdateCourse: any = {};

  showDialog() {
    this.visible = true;
  }
  archivoSubidoNombre: string = '';

  uploadedFile: any = null;

  uploaded: boolean = false;

  onUpload(event: any) {
    if (event.files.length > 0) {
      this.uploaded = true;
      this.archivoSubidoNombre = event.files[0].name;

      this.uploadedFile = event.files[0];
      this.dataForUpdateCourse.portada_curso = this.uploadedFile;
    }
  }
  emitDataForUpdateCourse() {
    this.formSubmitted = true;
    this.dataForUpdateCourse.nombre_curso =
      this.editCourseForm.get('nombre_curso')?.value;

    this.dataForUpdateCourse.descripcion_curso =
      this.editCourseForm.get('descripcion_curso')?.value;

    this.formSubmitted = true;

    if (this.editCourseForm.valid) {
      this.emitirData.emit(this.editCourseForm);
    }
  }

  getPortadaBase64(portadaCurso: any): string {
    const buffer = portadaCurso?.data;
    const array = Array.from(new Uint8Array(buffer));
    const binary = array.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image;base64,' + btoa(binary);
  }

  ngOnInit(): void {
    // if (this.curso) {
    //   this.editCourseForm.patchValue({
    //     nombre_curso: this.curso.nombre_curso,
    //     descripcion_curso: this.curso.descripcion_curso,
    //   });
    // }
  }
}
