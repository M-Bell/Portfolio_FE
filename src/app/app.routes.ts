import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/content/home/home.component';
import { NoContentComponent } from './layouts/content/no-content/no-content.component';
import { ProjectsComponent } from './layouts/content/projects/projects.component';
import { ContactMeComponent } from './layouts/content/contact-me/contact-me.component';
import { ProjectComponent } from './layouts/content/projects/project/project.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
  },
  {
    path: 'contact-me',
    component: ContactMeComponent,
  },
  {
    path: '**',
    component: NoContentComponent,
  },
];
