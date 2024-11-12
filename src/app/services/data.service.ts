import { Injectable } from '@angular/core';
import { MediaData, Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private BASE_URL: string = process.env['BACKEND_URL'] || '';

  // constructor(private httpClient: HttpClient) {}

  // public getAllProjects(): Observable<Project[]> {
  //   return this.httpClient.get<Project[]>(this.BASE_URL);
  // }

  // getProjectById(id: string | null): Observable<Project> {
  //   return this.httpClient.get<Project>(`${this.BASE_URL}/${id}`);
  // }

  // getMediaByProjectId(mediaProjectId: number): Observable<MediaData[]> {
  //   return this.httpClient.get<MediaData[]>(
  //     `${this.BASE_URL}/media/${mediaProjectId}`
  //   );
  // }

  private projects: Project[] = [
    {
      id: 5,
      name: 'Arcade Tank Game',
      description: 'This project is an arcade-style tank battle game developed as a team effort by me, Danylo Kozak, and Bohdan Yanchenko. The game draws inspiration from classic tank arcade games, featuring multiple levels with increasing difficulty, various power-ups, and unique gameplay mechanics.',
      gitUrl: 'https://github.com/Naryvan/Tanks',
      media: [
        {
          id: 6,
          type: 'video',
          address: 'https://res.cloudinary.com/dg9jxlzdz/video/upload/v1727644563/Tanks_promo_atsyqv.mp4',
          name: 'Promo Video'
        },
        {
          id: 7,
          type: 'video',
          address: 'https://res.cloudinary.com/dg9jxlzdz/video/upload/v1727644550/Tanks_playthrough_gvboyr.mp4',
          name: 'Playthrough'
        }
      ],
      technologyStack: [
        { id: 17, name: 'JavaFX' },
        { id: 18, name: 'Git' },
        { id: 2, name: 'Java' }
      ]
    },
    {
      id: 4,
      name: 'Plant Game',
      description: 'The Plant Game is a mobile application that allows park visitors to engage in a fun and educational game while also assisting park owners with plant monitoring.',
      technologyStack: [
        { id: 11, name: 'Flutter' },
        { id: 12, name: 'Dart' },
        { id: 2, name: 'Java' },
        { id: 3, name: 'Spring Boot' },
        { id: 15, name: 'Python' },
        { id: 16, name: 'RabbitMQ' }
      ]
    }
  ];

  constructor() {}

  public getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  public getProjectById(id: string | null): Observable<Project> {
    const project = this.projects.find(p => p.id.toString() === id);
    return of(project as Project);
  }

  public getMediaByProjectId(mediaProjectId: number): Observable<MediaData[]> {
    const project = this.projects.find(p => p.id === mediaProjectId);
    return of(project?.media || []);
  }
}
