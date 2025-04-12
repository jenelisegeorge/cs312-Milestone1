import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Color {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-color-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-select.component.html',
  styleUrl: './color-select.component.css'
})



export class ColorSelectComponent {
  selectedColor: string = '';

  colorList: Color[] = [
    { value: 'red', viewValue: 'Red' },
    { value: 'orange', viewValue: 'Orange' },
    { value: 'yellow', viewValue: 'Yellow' },
    { value: 'green', viewValue: 'Green' },
    { value: 'blue', viewValue: 'Blue' },
    { value: 'yellow', viewValue: 'Yellow' },
    { value: 'purple', viewValue: 'Purple' },
    { value: 'grey', viewValue: 'Grey' },
    { value: 'brown', viewValue: 'Brown' },
    { value: 'black', viewValue: 'Black' },
    { value: 'Teal', viewValue: 'Teal' }
  ];

  rows: number = 0;
  columns: number = 2;
  colors: number = 0;
  showTable: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      const rows = parseInt(params['rows'], 10);
      const columns = parseInt(params['columns'], 10);
      const colors = parseInt(params['colors'], 10);

      if (!isNaN(rows) && !isNaN(columns)) {
        this.setDimensions(rows, 2);
      }

      if (!isNaN(colors)) {
        this.colors = colors;
      }
    });
  }  

  setDimensions(rows: number, columns: number): void {
    this.rows = rows;
    this.columns = 2;
    this.showTable = true;
  }
}