import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPorCategoriaComponent } from './cursos-por-categoria.component';

describe('CursosPorCategoriaComponent', () => {
  let component: CursosPorCategoriaComponent;
  let fixture: ComponentFixture<CursosPorCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosPorCategoriaComponent]
    });
    fixture = TestBed.createComponent(CursosPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
