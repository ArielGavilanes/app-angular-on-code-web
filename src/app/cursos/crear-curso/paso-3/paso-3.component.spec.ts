import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso3Component } from './paso-3.component';

describe('Paso3Component', () => {
  let component: Paso3Component;
  let fixture: ComponentFixture<Paso3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Paso3Component]
    });
    fixture = TestBed.createComponent(Paso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
