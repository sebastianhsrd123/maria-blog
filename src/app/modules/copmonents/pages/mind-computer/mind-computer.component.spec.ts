import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindComputerComponent } from './mind-computer.component';

describe('MindComputerComponent', () => {
  let component: MindComputerComponent;
  let fixture: ComponentFixture<MindComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindComputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
