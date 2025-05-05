import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Add {
  name: string;
  hex: string;
  //If adding a color would conflict with an already existing name or hex value,
  // a non-intrusive error should be displayed telling the user so.
}

interface Edit {
    name: string;
    hex: string;
    //The same errors apply to the Add command.
}

interface Delete {
    name: string;
    hex: string;
    //this is a 2 step process to prevent any accidental deletes (e.g. don't use a drop down menu that sends a delete request on click)
    //do not let the user submit a delete request if there are less than 2 colors in the color table. Please use a non-intrusive error to alert the user if they attempt to delete one of the last 2 colors.
    //
}

interface Color {
    value: string;
    viewValue: string;
  }



@Component({
  selector: 'app-color-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './color-selection.component.html',
  styleUrl: './color-selection.component.css'
})

export class ColorSelectionComponent implements OnInit{
  showTable: boolean = true;

  colors: Color[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getColors().subscribe({
      next: data => {
        this.colors = data.map(c => ({
          value: c.hex_value,
          viewValue: c.color_name
        }));
      },
      error: err => {
        console.error('Error getting colors', err);
        this.addError = 'Failed to get colors from database.';
      }
    });
  }

  getColors() {
    return this.http.get<{ color_name: string; hex_value: string }[]>('https://cs.colostate.edu:4444/~baldwin2/api');
  }

  newColor: Add = { name: '', hex: '' };
  addError: string = '';

  selectedEditColor: Color | null = null;
  editColor: Edit = { name: '', hex: '' };
  editError: string = '';

  selectedDeleteColor: Color | null = null;
  confirmingDelete: boolean = false;
  deleteError: string = '';

  addNewColor() {
    this.addError = '';

    const nameExists = this.colors.some(c => c.viewValue.toLowerCase() === this.newColor.name.toLowerCase());
    const hexExists = this.colors.some(c => c.value.toLowerCase() === this.newColor.hex.toLowerCase());

    if (!this.newColor.name || !this.newColor.hex) {
      this.addError = 'Name and hex value are required.';
      return;
    }

    if (nameExists || hexExists) {
      this.addError = 'Color name or hex value already exists.';
      return;
    }

    this.colors.push({
      value: this.newColor.hex,
      viewValue: this.newColor.name
    });

    this.newColor = { name: '', hex: '' };
  }

  startEdit(color: Color | null) {
    this.selectedEditColor = color;
    if (color) {
      this.editColor = { name: color.viewValue, hex: color.value };
    }
    this.editError = '';
  }

  editSelectedColor() {
    if (!this.selectedEditColor) return;
    this.editError = '';

    const nameExists = this.colors.some(c =>
      c.viewValue.toLowerCase() === this.editColor.name.toLowerCase() &&
      c !== this.selectedEditColor
    );
    const hexExists = this.colors.some(c =>
      c.value.toLowerCase() === this.editColor.hex.toLowerCase() &&
      c !== this.selectedEditColor
    );

    if (!this.editColor.name || !this.editColor.hex) {
      this.editError = 'Name and hex value are required.';
      return;
    }

    if (nameExists || hexExists) {
      this.editError = 'Color name or hex value already exists.';
      return;
    }

    this.selectedEditColor.viewValue = this.editColor.name;
    this.selectedEditColor.value = this.editColor.hex;

    this.selectedEditColor = null;
    this.editColor = { name: '', hex: '' };
  }

  requestDeleteColor(color: Color | null) {
    if (!color) return;

    
    this.deleteError = '';

    if (this.colors.length <= 2) {
      this.deleteError = 'You must keep at least two colors.';
      return;
    }

    this.selectedDeleteColor = color;
    this.confirmingDelete = true;
  }

  confirmDeleteColor() {
    if (!this.selectedDeleteColor) return;

    this.colors = this.colors.filter(c => c !== this.selectedDeleteColor);
    this.selectedDeleteColor = null;
    this.confirmingDelete = false;
    this.deleteError = '';
  }

  cancelDelete() {
    this.selectedDeleteColor = null;
    this.confirmingDelete = false;
  }
}