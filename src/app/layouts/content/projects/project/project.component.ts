import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../models/project.model';
import { TechnologyTagComponent } from '../project-card/technology-tag/technology-tag.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TechnologyTagComponent, RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  @Input({ required: true })
  project!: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    let id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    this.project = this.dataService.mockProjects[parseInt(id ? id : '0')];
  }
}
