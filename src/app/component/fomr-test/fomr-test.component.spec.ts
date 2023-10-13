import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrTestComponent } from './fomr-test.component';

describe('FomrTestComponent', () => {
  let component: FomrTestComponent;
  let fixture: ComponentFixture<FomrTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FomrTestComponent]
    });
    fixture = TestBed.createComponent(FomrTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
