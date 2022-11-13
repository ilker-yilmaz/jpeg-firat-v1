import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantizationTablesComponent } from './quantization-tables.component';

describe('QuantizationTablesComponent', () => {
  let component: QuantizationTablesComponent;
  let fixture: ComponentFixture<QuantizationTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantizationTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantizationTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
