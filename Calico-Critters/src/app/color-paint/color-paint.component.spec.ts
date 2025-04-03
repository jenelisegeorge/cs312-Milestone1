import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaintComponent } from './color-paint.component';

describe('ColorPaintComponent', () => {
  let component: ColorPaintComponent;
  let fixture: ComponentFixture<ColorPaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPaintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
