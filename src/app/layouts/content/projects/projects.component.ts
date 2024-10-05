import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { DataService } from '../../../services/data.service';
import { Project } from '../../../models/project.model';
import { LoadingComponent } from "../../util/loading/loading.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, LoadingComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  public loading: boolean = false;
  public projectList: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getAllProjects().subscribe({
      next: x => this.projectList = x,
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }
}
