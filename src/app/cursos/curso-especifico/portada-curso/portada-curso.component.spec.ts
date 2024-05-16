import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaCursoComponent } from './portada-curso.component';

describe('PortadaCursoComponent', () => {
  let component: PortadaCursoComponent;
  let fixture: ComponentFixture<PortadaCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortadaCursoComponent]
    });
    fixture = TestBed.createComponent(PortadaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
