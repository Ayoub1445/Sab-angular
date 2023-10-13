import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvFileComponent } from './csv-file.component';

describe('CsvFileComponent', () => {
  let component: CsvFileComponent;
  let fixture: ComponentFixture<CsvFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsvFileComponent]
    });
    fixture = TestBed.createComponent(CsvFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
