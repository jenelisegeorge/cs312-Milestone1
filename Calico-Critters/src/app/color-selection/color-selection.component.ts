import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

export class ColorSelectionComponent {
  showTable: boolean = true;

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

    // ------------------------------------------------------------------------
    //this can stay here for now until db is connected - 
    // but colors list is initialized with colors via database not in a ts array
    // ------------------------------------------------------------------------


    //Please pre-initialize your table with the 10 basic colors as per milestone 1.

}