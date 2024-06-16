import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-cursos',
  templateUrl: './profile-cursos.component.html',
  styleUrls: ['./profile-cursos.component.css'],
})
export class ProfileCursosComponent {
  // cursos: string[] = [
  //   'Curso de Angular',
  //   'Curso de TypeScript',
  //   'Curso de CSS Avanzado',
  //   'Curso de Desarrollo Web',
  //   'Curso de React',
  // ];

  @Input() id_rol: number | null = 0;

  @Input() cursos: any[] = [];

  @Input() barChartOptions: any;

  @Input() barChartData: any;

  getPortadaBase64(portadaCurso: any): string {
    const buffer = portadaCurso?.data;
    const array = Array.from(new Uint8Array(buffer));
    const binary = array.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image;base64,' + btoa(binary);
  }
}
