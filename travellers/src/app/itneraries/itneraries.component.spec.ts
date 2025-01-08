import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItnerariesComponent } from './itneraries.component';

describe('ItnerariesComponent', () => {
  let component: ItnerariesComponent;
  let fixture: ComponentFixture<ItnerariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItnerariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItnerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
