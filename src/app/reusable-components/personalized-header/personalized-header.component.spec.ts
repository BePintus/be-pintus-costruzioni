import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedHeaderComponent } from './personalized-header.component';

describe('PersonalizedHeaderComponent', () => {
  let component: PersonalizedHeaderComponent;
  let fixture: ComponentFixture<PersonalizedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
