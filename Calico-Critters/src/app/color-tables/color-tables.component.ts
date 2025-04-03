import { Component } from '@angular/core';
import { ColorSelectComponent } from '../color-select/color-select.component';
import { ColorPaintComponent } from '../color-paint/color-paint.component';

@Component({
  selector: 'app-color-tables',
  imports: [ColorSelectComponent, ColorPaintComponent],
  templateUrl: './color-tables.component.html',
  styleUrl: './color-tables.component.css'
})
export class ColorTablesComponent {

}
