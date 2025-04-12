// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ColorSelectComponent } from './color-select.component';

// describe('ColorSelectComponent', () => {
//   let component: ColorSelectComponent;
//   let fixture: ComponentFixture<ColorSelectComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ColorSelectComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ColorSelectComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorSelectComponent } from './color-select.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('ColorSelectComponent', () => {
  let component: ColorSelectComponent;
  let fixture: ComponentFixture<ColorSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorSelectComponent], // <-- Fix here
      imports: [CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

