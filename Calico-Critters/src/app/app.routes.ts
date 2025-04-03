import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ColorComponent } from './color/color.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path: '', component:HomepageComponent, pathMatch:'full'},
    {path: 'homepage', component:HomepageComponent},
    {path: 'about', component:AboutComponent},
    {path: 'color', component:ColorComponent}
];
