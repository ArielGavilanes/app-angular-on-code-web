import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.css'],
})
export class ProfileBannerComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}
  @Input() user: any = {};

  ngOnInit(): void {}

  getPortadaBase64(portadaCurso: any): string {
    const buffer = portadaCurso?.data;
    const array = Array.from(new Uint8Array(buffer));
    const binary = array.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image;base64,' + btoa(binary);
  }

  @Output() emitirFotoDePortada: EventEmitter<any> = new EventEmitter<any>();

  @Output() emitirFotoDePerfil: EventEmitter<any> = new EventEmitter<any>();

  archivoSubidoNombre: string = '';

  uploadedFile: any = null;

  uploaded: boolean = false;

  visibleEditCover: boolean = false;

  visibleEditProfile: boolean = false;

  dataForUpdateImage: any = {};

  foto_portada: any | undefined;

  foto_perfil: any | undefined;

  onUploadCover(event: any) {
    if (event.files.length > 0) {
      this.uploaded = true;
      this.archivoSubidoNombre = event.files[0].name;

      this.uploadedFile = event.files[0];
      this.foto_portada = this.uploadedFile;
    }
  }

  onUploadProfile(event: any) {
    if (event.files.length > 0) {
      this.uploaded = true;
      this.archivoSubidoNombre = event.files[0].name;

      this.uploadedFile = event.files[0];
      this.foto_perfil = this.uploadedFile;
    }
  }

  showModalCover() {
    this.visibleEditCover = true;
  }

  showModalProfile() {
    this.visibleEditProfile = true;
  }

  updateProfilePhoto() {
    if (this.dataForUpdateImage.foto_portada) {
      delete this.dataForUpdateImage.foto_portada;
    }
    this.dataForUpdateImage.foto_perfil = this.foto_perfil;
    const formData = new FormData();
    for (const key in this.dataForUpdateImage) {
      formData.append(key, this.dataForUpdateImage[key]);
    }

    this.emitirFotoDePerfil.emit(formData);
  }

  updateProfileCover() {
    if (this.dataForUpdateImage.foto_perfil) {
      delete this.dataForUpdateImage.foto_perfil;
    }

    this.dataForUpdateImage.foto_portada = this.foto_portada;
    const formData = new FormData();
    for (const key in this.dataForUpdateImage) {
      formData.append(key, this.dataForUpdateImage[key]);
    }

    this.emitirFotoDePortada.emit(formData);
  }
  // closeModalCover() {
  //   this.visibleEditCover = true;
  // }
}
