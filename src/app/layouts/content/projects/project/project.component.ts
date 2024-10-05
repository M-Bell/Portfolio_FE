import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../models/project.model';
import { TechnologyTagComponent } from '../project-card/technology-tag/technology-tag.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { MediaCarouselComponent } from './media-carousel/media-carousel.component';
import { LoadingComponent } from '../../../util/loading/loading.component';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TechnologyTagComponent,
    RouterLink,
    MediaCarouselComponent,
    LoadingComponent,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  @Input({ required: true })
  public project!: Project;
  public loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    let id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService
      .getProjectById(id)
      .subscribe({
        next: data => this.project = data,
        error: () => this.loading = false,
        complete: () => this.loading = false,
      });
  }
}
