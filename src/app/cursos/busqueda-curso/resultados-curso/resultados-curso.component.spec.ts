import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCursoComponent } from './resultados-curso.component';

describe('ResultadosCursoComponent', () => {
  let component: ResultadosCursoComponent;
  let fixture: ComponentFixture<ResultadosCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosCursoComponent]
    });
    fixture = TestBed.createComponent(ResultadosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
