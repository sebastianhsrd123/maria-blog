import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducstivePlacesComponent } from './educstive-places.component';

describe('EducstivePlacesComponent', () => {
  let component: EducstivePlacesComponent;
  let fixture: ComponentFixture<EducstivePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducstivePlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducstivePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
