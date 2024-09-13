import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { DataService } from '../../../services/data.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projectList: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projectList = this.dataService.mockProjects;
  }
}
