import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColorCoordinationService } from '../color-coordination/color-coordination.service';
import { HttpClient } from '@angular/common/http';

interface Color {
  value: string;
  viewValue: string;
  hex: string;
}

@Component({
  selector: 'app-color-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-select.component.html',
  styleUrl: './color-select.component.css'
})



export class ColorSelectComponent implements OnInit{
  selectedColor: string = '';

  colorList: Color[] = [];

  rows: number = 0;
  columns: number = 2;
  colors: number = 0;
  showTable: boolean = false;
  selectedColors: string[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, public colorCoordinationService: ColorCoordinationService) {}

  ngOnInit(): void {
    this.http.get<{ color_name: string; hex_value: string }[]>('https://cs.colostate.edu:4444/~baldwin2/api').subscribe({
      next: data => {
        this.colorList = data.map(c => ({
          value: c.hex_value,
          viewValue: c.color_name,
          hex: c.hex_value
        }));
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
       const availableColors = [...this.colorList.map(c => c.value)];
        this.selectedColors = [];

        for (let i = 0; i < this.colors; i++) {
          const color = availableColors[i % availableColors.length];
          this.selectedColors.push(color);
        }
    });

      },
      error: err => {
        console.error('Failed loading colors, error:', err);
      }
      });
  }
    



  setDimensions(rows: number, columns: number): void {
    this.rows = rows;
    console.log(rows);
    this.columns = 2;
    this.showTable = true;
  }

  isColorAvailable(color: string, currentIndex: number): boolean{
    return this.selectedColors.some(
      (selected, i) => i !== currentIndex && selected === color
    );
  }

  onColorChange(event: Event, index: number) {
  const target = event.target as HTMLSelectElement;
  const selectedValue = target.value;
  this.selectedColors[index] = selectedValue;
}

getHexCode(color: string): string {
  const found = this.colorList.find(c => c.value === color);
  return found ? found.hex : '';
}

getColorName (color: string): string {
  const found = this.colorList.find(c => c.value === color);
  return found ? found.viewValue : '';
}

}