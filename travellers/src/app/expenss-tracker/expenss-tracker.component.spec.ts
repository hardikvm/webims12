import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenssTrackerComponent } from './expenss-tracker.component';

describe('ExpenssTrackerComponent', () => {
  let component: ExpenssTrackerComponent;
  let fixture: ComponentFixture<ExpenssTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenssTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenssTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
