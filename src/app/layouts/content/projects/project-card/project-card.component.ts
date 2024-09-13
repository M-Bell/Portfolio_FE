import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/project.model';
import { TechnologyTagComponent } from './technology-tag/technology-tag.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TechnologyTagComponent, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input({ required: true })
  project!: Project;
}
