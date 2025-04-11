// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-color-select',
//   imports: [],
//   templateUrl: './color-select.component.html',
//   styleUrl: './color-select.component.css'
// })
// export class ColorSelectComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-select',
  standalone: true,               // ✅ Make it standalone
  imports: [CommonModule, FormsModule],  // ✅ Add needed modules
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent {
  colorsList = ["red", "orange", "yellow", "green", "blue", "purple", "grey", "brown", "black", "teal"];
  numColors = 5;
  selectedColors: string[] = [];
  selectedRadioIndex: number = 0;

  ngOnInit() {
    this.selectedColors = this.colorsList.slice(0, this.numColors);
  }

  onColorChange(index: number, event: Event) {
    const target = event.target as HTMLSelectElement;
    const newColor = target.value;
    this.selectedColors[index] = newColor;
  }

  isColorDisabled(color: string, currentIndex: number): boolean {
    return this.selectedColors.includes(color) && this.selectedColors[currentIndex] !== color;
  }

  onRadioChange(index: number) {
    this.selectedRadioIndex = index;
  }
}
