import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCursosComponent } from './profile-cursos.component';

describe('ProfileCursosComponent', () => {
  let component: ProfileCursosComponent;
  let fixture: ComponentFixture<ProfileCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCursosComponent]
    });
    fixture = TestBed.createComponent(ProfileCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
