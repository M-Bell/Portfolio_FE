import { Injectable } from '@angular/core';
import { MediaData, Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private BASE_URL: string = 'http://localhost:8080/api/portfolio/projects';

  constructor(private httpClient: HttpClient) {}

  public getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.BASE_URL);
  }

  getProjectById(id: string | null): Observable<Project> {
    return this.httpClient.get<Project>(`${this.BASE_URL}/${id}`);
  }

  getMediaByProjectId(mediaProjectId: number): Observable<MediaData[]> {
    console.log(`${this.BASE_URL}/media/${mediaProjectId}`);
    
    return this.httpClient.get<MediaData[]>(
      `${this.BASE_URL}/media/${mediaProjectId}`
    );
  }
}
