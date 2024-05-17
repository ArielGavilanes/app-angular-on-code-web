import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css'],
})
export class CursosListComponent {
  @Input() cursos: any[] = [];

  @Output() verDetallesClick: EventEmitter<number> = new EventEmitter<number>();

  onVerDetallesClick(id: number) {
    this.verDetallesClick.emit(id);
  }

}
