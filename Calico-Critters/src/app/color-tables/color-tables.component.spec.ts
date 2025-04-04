import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTablesComponent } from './color-tables.component';

describe('ColorTablesComponent', () => {
  let component: ColorTablesComponent;
  let fixture: ComponentFixture<ColorTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
