import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCompoComponent } from './third-compo.component';

describe('ThirdCompoComponent', () => {
  let component: ThirdCompoComponent;
  let fixture: ComponentFixture<ThirdCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdCompoComponent]
    });
    fixture = TestBed.createComponent(ThirdCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
