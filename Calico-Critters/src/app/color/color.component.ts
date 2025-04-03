import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  imports: [ ReactiveFormsModule ],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
  colorForm = new FormGroup({
    rows: new FormControl(''),
    columns: new FormControl(''),
    colors: new FormControl(''),
  });

  constructor(private router: Router) {}

  submit() {
    if (this.colorForm.invalid){
      return;
    }
    this.router.navigate(['/color-tables']);
  }
}
