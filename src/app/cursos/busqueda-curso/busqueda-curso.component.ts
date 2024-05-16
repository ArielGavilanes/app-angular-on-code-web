import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-curso',
  templateUrl: './busqueda-curso.component.html',
  styleUrls: ['./busqueda-curso.component.css']
})
export class BusquedaCursoComponent implements OnInit {
  query_curso: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query_curso = params['curso_nombre'];
    });
  }
}
