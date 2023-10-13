import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCompoComponent } from './second-compo.component';

describe('SecondCompoComponent', () => {
  let component: SecondCompoComponent;
  let fixture: ComponentFixture<SecondCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondCompoComponent]
    });
    fixture = TestBed.createComponent(SecondCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
