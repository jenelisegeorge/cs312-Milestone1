import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ColorComponent } from './color/color.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ColorTablesComponent } from './color-tables/color-tables.component';
import { ColorSelectComponent } from './color-select/color-select.component';
import { ColorPaintComponent } from './color-paint/color-paint.component';
import { ColorSelectionComponent } from './color-selection/color-selection.component';

export const routes: Routes = [
    {path: '', component:HomepageComponent, pathMatch:'full'},
    {path: 'homepage', component:HomepageComponent},
    {path: 'about', component:AboutComponent},
    {path: 'color', component:ColorComponent},
    {path: 'color-tables', component:ColorTablesComponent},
    {path: 'color-select', component:ColorSelectComponent},
    {path: 'color-paint', component:ColorPaintComponent},
    {path: 'color-selection', component:ColorSelectionComponent}
];
