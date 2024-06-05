import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resultados-curso',
  templateUrl: './resultados-curso.component.html',
  styleUrls: ['./resultados-curso.component.css'],
})
export class ResultadosCursoComponent implements OnInit {
  @Input() query_curso: string = '';

  @Input() isLoading: boolean = false;

  // isLoadingTrue: boolean = true;
  @Input() foundedCursos: any[] | null | undefined = [];

  getPortadaBase64(portadaCurso: any): string {
    const buffer = portadaCurso.data;
    const array = Array.from(new Uint8Array(buffer));
    const binary = array.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image;base64,' + btoa(binary);
  }

  ngOnInit(): void {
    console.log('cursos en componente', this.foundedCursos);
  }
}
