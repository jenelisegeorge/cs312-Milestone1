import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColorCoordinationService } from '../color-coordination/color-coordination.service';

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
    { value: 'purple', viewValue: 'Purple' },
    { value: 'grey', viewValue: 'Grey' },
    { value: 'brown', viewValue: 'Brown' },
    { value: 'black', viewValue: 'Black' },
    { value: 'teal', viewValue: 'Teal' }
  ];

  rows: number = 0;
  columns: number = 2;
  colors: number = 0;
  showTable: boolean = false;
  selectedColors: string[] = [];

  constructor(private route: ActivatedRoute, public colorCoordinationService: ColorCoordinationService) {}

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

    for (let i = 0; i < this.colors; i++){
      this.selectedColors[i] = this.colorList[i].value || '';
    }
    
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

}