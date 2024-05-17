import { Component } from '@angular/core';

@Component({
  selector: 'profile-cursos',
  templateUrl: './profile-cursos.component.html',
  styleUrls: ['./profile-cursos.component.css']
})
export class ProfileCursosComponent {
  cursos: string[] = [
    'Curso de Angular',
    'Curso de TypeScript',
    'Curso de CSS Avanzado',
    'Curso de Desarrollo Web',
    'Curso de React'
  ];
products: any;
}
