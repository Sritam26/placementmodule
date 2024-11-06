import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentplacementLandingComponent } from './studentplacement-landing.component';

describe('StudentplacementLandingComponent', () => {
  let component: StudentplacementLandingComponent;
  let fixture: ComponentFixture<StudentplacementLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentplacementLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentplacementLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
