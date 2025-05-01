import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items = [
   { routeLink: 'homepage', label: 'Homepage'},
   { routeLink: 'about', label: 'About'},
   { routeLink: 'color', label: 'Color Generator'},
   { routeLink: 'color-selection', label: 'Manage Colors'},
  ]

}
