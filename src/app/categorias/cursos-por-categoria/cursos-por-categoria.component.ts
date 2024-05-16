import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-cursos-por-categoria',
  templateUrl: './cursos-por-categoria.component.html',
  styleUrls: ['./cursos-por-categoria.component.css'],
})
export class CursosPorCategoriaComponent implements OnInit {
  nombre_categoria: any = '';

  constructor(
    private route: ActivatedRoute,
    private categoriasService: CategoriasService
  ) {}
  cursos: any[] = [];

  getCoursesByCategoryName(nombre_categoria: string) {
    return this.categoriasService
      .getCoursesByCategoryName(nombre_categoria)
      .subscribe(
        (response) => (this.cursos = response),
        (err) => console.log(err)
      );
  }

  ngOnInit(): void {
    this.nombre_categoria =
      this.route.params.subscribe(params => {
        this.nombre_categoria = params['nombre_categoria']
        this.getCoursesByCategoryName(this.nombre_categoria);
      });

  }
}
