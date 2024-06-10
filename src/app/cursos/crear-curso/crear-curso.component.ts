import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {
  items: MenuItem[] = [
    { label: 'Crea un nombre', routerLink: 'step-1' },
    { label: 'Elige un precio', routerLink: 'step-2' },
    { label: 'Selecciona una portada', routerLink: 'step-3' },
  ];
}
