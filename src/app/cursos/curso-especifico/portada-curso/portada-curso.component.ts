import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portada-curso',
  templateUrl: './portada-curso.component.html',
  styleUrls: ['./portada-curso.component.css'],
})
export class PortadaCursoComponent {
  @Input() curso: any;

  getPortadaBase64(portadaCurso: any): string {
    const buffer = portadaCurso?.data;
    const array = Array.from(new Uint8Array(buffer));
    const binary = array.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image;base64,' + btoa(binary);
  }

}
