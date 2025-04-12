import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-paint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-paint.component.html',
  styleUrl: './color-paint.component.css'
})
export class ColorPaintComponent {
  rows: number = 0;
  columns: number = 0;
  colors: number = 0;
  showTable: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      const rows = parseInt(params['rows'], 10);
      const columns = parseInt(params['columns'], 10);
      const colors = parseInt(params['colors'], 10);

      if (!isNaN(rows) && !isNaN(columns)) {
        this.setDimensions(rows, columns);
      }

      if (!isNaN(colors)) {
        this.colors = colors;
      }
    });
  }  

  setDimensions(rows: number, columns: number): void {
    this.rows = rows;
    this.columns = columns;
    this.showTable = true;
  }

  getColumnName(col: number): string {
    let name = '';
    while (col >= 0) {
      name = String.fromCharCode((col % 26) + 65) + name;
      col = Math.floor(col / 26) - 1;
    }
    return name;
  }

  onCellClick(row: number, colIndex: number): void {
    const colLabel = this.getColumnName(colIndex);
    alert(`${colLabel}${row}`);
  }

 printPage() {
    window.print();
    
  }
}


