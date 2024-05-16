import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCursoComponent } from './busqueda-curso.component';

describe('BusquedaCursoComponent', () => {
  let component: BusquedaCursoComponent;
  let fixture: ComponentFixture<BusquedaCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaCursoComponent]
    });
    fixture = TestBed.createComponent(BusquedaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
