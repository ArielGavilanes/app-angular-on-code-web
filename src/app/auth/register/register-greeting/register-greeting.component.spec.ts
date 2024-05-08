import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGreetingComponent } from './register-greeting.component';

describe('RegisterGreetingComponent', () => {
  let component: RegisterGreetingComponent;
  let fixture: ComponentFixture<RegisterGreetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterGreetingComponent]
    });
    fixture = TestBed.createComponent(RegisterGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
