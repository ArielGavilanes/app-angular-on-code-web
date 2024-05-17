import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { search } from 'src/app/state/actions/search.actions';
import {
  selectSearchFoundedCursos,
  selectSearchLoading,
} from 'src/app/state/selectors/search.selectors';

@Component({
  selector: 'app-busqueda-curso',
  templateUrl: './busqueda-curso.component.html',
  styleUrls: ['./busqueda-curso.component.css'],
})
export class BusquedaCursoComponent implements OnInit {
  foundedCursos: any[] | null | undefined = [];

  isLoading: boolean = false;

  query_curso: string = '';

  // arrayBufferToUrl(buffer: ArrayBuffer): string {
  //   const blob = new Blob([buffer], { type: 'image' }); // Ajusta el tipo MIME según sea necesario
  //   return URL.createObjectURL(blob);
  // }

  // loadCourseImages() {
  //   if (!this.foundedCursos) return;

  //   this.foundedCursos.forEach((curso) => {
  //     curso.portada_curso = this.getImageUrl(curso.portada_curso);
  //   });

  //   console.log('cursos', this.foundedCursos)
  // }

  // getImageUrl(portadaCurso: Uint8Array): any {
  //   const arrayBuffer = portadaCurso.buffer;
  //   const blob = new Blob([arrayBuffer], { type: 'image/jpeg' }); // Ajustar tipo si es necesario
  //   const fileReader = new FileReader();

  //   fileReader.readAsDataURL(blob);

  //   fileReader.onload = () => {
  //     return fileReader.result as string;
  //   };
  // }
  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  searchCourse(query_curso: any) {
    this.store.dispatch(search({ query_curso }));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query_curso = params['curso_nombre'];
      this.searchCourse(this.query_curso);
    });

    this.store.pipe(select(selectSearchLoading)).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    this.store.pipe(select(selectSearchFoundedCursos)).subscribe((cursos) => {
      this.foundedCursos = cursos;
    });

    // this.loadCourseImages()

    // this.foundedCursos = this.foundedCursos?.map((curso) => {
    //   return {
    //     ...curso,
    //     portada_curso: this.arrayBufferToUrl(curso.portada_curso),
    //   };
    // });
  }


}
