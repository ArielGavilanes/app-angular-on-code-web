import { Component, Input } from '@angular/core';

@Component({
  selector: 'cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css'],
})
export class CursosListComponent {
  @Input() cursos: any[] = [];
}
