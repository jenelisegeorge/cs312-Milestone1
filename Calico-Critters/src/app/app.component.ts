import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ColorComponent } from './color/color.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainComponent } from './main/main.component';
import { ColorTablesComponent } from './color-tables/color-tables.component';
import { ColorSelectComponent } from './color-select/color-select.component';
import { ColorPaintComponent } from './color-paint/color-paint.component';
import { ColorManagementComponent } from './color-management/color-management.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutComponent, ColorComponent, HomepageComponent, MainComponent,ColorTablesComponent, ColorSelectComponent, ColorPaintComponent, ColorManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calico-Critters';
}
