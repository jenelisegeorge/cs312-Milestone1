import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorCoordinationService {
  activeColor$ = new BehaviorSubject<string>('');  // selected color for painting
  colorToCoords = new Map<string, Set<string>>();
  cellColorMap = new Map<string, string>(); // e.g. "A1" -> "red"

  setActiveColor(color: string) {
    this.activeColor$.next(color);
  }

  getActiveColor() {
    return this.activeColor$.getValue();
  }

  paintCell(coord: string) {
    const activeColor = this.getActiveColor();
    const currentColor = this.cellColorMap.get(coord);

    if (currentColor === activeColor) return;

    // Remove from old color set
    if (currentColor && this.colorToCoords.has(currentColor)) {
      this.colorToCoords.get(currentColor)!.delete(coord);
    }

    // Add to new color set
    if (!this.colorToCoords.has(activeColor)) {
      this.colorToCoords.set(activeColor, new Set());
    }
    this.colorToCoords.get(activeColor)!.add(coord);
    this.cellColorMap.set(coord, activeColor);
  }

  updateColor(oldColor: string, newColor: string) {
    if (!this.colorToCoords.has(oldColor)) return;

    const coords = this.colorToCoords.get(oldColor)!;
    this.colorToCoords.delete(oldColor);

    if (!this.colorToCoords.has(newColor)) {
      this.colorToCoords.set(newColor, new Set());
    }

    for (const coord of coords) {
      this.colorToCoords.get(newColor)!.add(coord);
      this.cellColorMap.set(coord, newColor);
    }
  }

  getSortedCoordsForColor(color: string): string[] {
    const coords = this.colorToCoords.get(color);
    if (!coords) return [];

    return Array.from(coords).sort((a, b) => {
      const colA = a.match(/[A-Z]+/g)![0];
      const rowA = parseInt(a.match(/\d+/g)![0]);
      const colB = b.match(/[A-Z]+/g)![0];
      const rowB = parseInt(b.match(/\d+/g)![0]);

      if (colA === colB) return rowA - rowB;
      return colA.localeCompare(colB);
    });
  }

  getCellColor(coord: string): string {
    return this.cellColorMap.get(coord) || '';
  }
}
