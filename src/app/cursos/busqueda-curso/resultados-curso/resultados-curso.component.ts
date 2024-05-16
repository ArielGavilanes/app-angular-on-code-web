import { Component, Input } from '@angular/core';

@Component({
  selector: 'resultados-curso',
  templateUrl: './resultados-curso.component.html',
  styleUrls: ['./resultados-curso.component.css'],
})
export class ResultadosCursoComponent {
  @Input() query_curso: string = '';
}
