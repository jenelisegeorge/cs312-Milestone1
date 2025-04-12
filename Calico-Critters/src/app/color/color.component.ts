import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormControl, AbstractControl, ValidationErrors  } from '@angular/forms';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-color',
  imports: [ ReactiveFormsModule, NgIf ],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
  formSubmitted = false;

  colorForm = new FormGroup({
    rows: new FormControl<number | null>(null, [Validators.min(1), Validators.max(1000), Validators.required, this.numberCheck]),
    columns: new FormControl<number | null>(null, [Validators.min(1), Validators.max(702), Validators.required, this.numberCheck]),
    colors: new FormControl<number | null>(null, [Validators.min(1), Validators.max(10), Validators.required, this.numberCheck]),
  });

  constructor(private router: Router) {}

  submit() {
    this.formSubmitted = true;
    if (this.colorForm.invalid){
      return;
    }

    const { rows, columns, colors } = this.colorForm.value;

    this.router.navigate(['/color-tables'], {
      queryParams: {
        rows: rows,
        columns: columns,
        colors: colors
      }
    });
  }
  
  numberCheck(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value === null) {
      return null;
    } 
    return isNaN(value) ? {nonNumber : true} : null;
  }

  getErrorMessage(controlName : string) : string {
    const control = this.colorForm.get(controlName);
    if (!control || !control.errors){
      return '';
    }
    if (control.errors['required']){
      switch (controlName){
        case 'rows':
        return 'Rows: Value must be provided.';
      }
      switch (controlName){
        case 'columns':
        return 'Columns: Value must be provided.';
      }
      switch (controlName){
        case 'colors':
        return 'Colors: Value must be provided.';
      }
    }
    if (control.errors['min']){
      switch (controlName){
        case 'rows':
        return 'Rows: Value must be greater than 0.';
      }
      switch (controlName){
        case 'columns':
        return 'Columns: Value must be greater than 0.';
      }
      switch (controlName){
        case 'colors':
        return 'Colors: Value must be greater than 0.';
      }
    }
    if (control.errors['max']){
      switch (controlName){
        case 'rows':
        return 'Rows: Value cannot be greater than 1000.';
      }
      switch (controlName){
        case 'columns':
        return 'Columns: Value cannot be greater than 702.';
      }
      switch (controlName){
        case 'colors':
        return 'Colors: Value cannot be greater than 10.';
      }
    }
    if (control.errors['nonNumber']){
      switch (controlName){
        case 'rows':
        return 'Rows: Only numeric values may be used.';
      }
      switch (controlName){
        case 'columns':
        return 'Columns: Only numeric values may be used.';
      }
      switch (controlName){
        case 'colors':
        return 'Colors: Only numeric values may be used.';
      }
    }
    return '....Invalid Input....'
  }
}
