import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPaintComponent } from './color-paint.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; //??

describe('ColorPaintComponent', () => {
  let component: ColorPaintComponent;
  let fixture: ComponentFixture<ColorPaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ColorPaintComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ rows: '5', columns: '3', colors: '2' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert column index to label correctly', () => {
    expect(component.getColumnName(0)).toBe('A');
    expect(component.getColumnName(25)).toBe('Z');
    expect(component.getColumnName(26)).toBe('AA');
    expect(component.getColumnName(701)).toBe('ZZ');
  });

  it('should set dimensions and show table', () => {
    expect(component.rows).toBe(5);
    expect(component.columns).toBe(3);
    expect(component.showTable).toBeTrue();
  });

  it('should set colors from query params', () => {
    expect(component.colors).toBe(2);
  });
});
