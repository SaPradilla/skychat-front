import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBottonsComponent } from './auth-bottons.component';

describe('AuthBottonsComponent', () => {
  let component: AuthBottonsComponent;
  let fixture: ComponentFixture<AuthBottonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthBottonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthBottonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
