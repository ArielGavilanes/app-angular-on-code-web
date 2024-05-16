import { Component } from '@angular/core';

@Component({
  selector: 'app-portada-curso',
  templateUrl: './portada-curso.component.html',
  styleUrls: ['./portada-curso.component.css']
})
export class PortadaCursoComponent {
  courseTitle: string = "Curso de Angular";
  courseDescription: string = "Aprende Angular de manera fácil y rápida";
  Autor: string = "Jess Sandoval";
  duration: string = "4 semanas";
  level: string = "Intermedio";
}

