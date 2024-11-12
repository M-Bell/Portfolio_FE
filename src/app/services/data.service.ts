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

  constructor() {}

  private projects: Project[] = [
    {
      id: 5,
      name: 'Arcade Tank Game',
      description:
        'This project is an arcade-style tank battle game developed as a team effort by me, Danylo Kozak, and Bohdan Yanchenko. The game draws inspiration from classic tank arcade games, featuring multiple levels with increasing difficulty, various power-ups, and unique gameplay mechanics. The user interface is built using JavaFX, providing an intuitive and responsive experience. Throughout the development process, the team collaborated closely using a version control system to manage the codebase efficiently. The game includes 6 levels, offering players a fun and engaging tank battle experience.',
      gitUrl: 'https://github.com/Naryvan/Tanks',
      accessUrl: undefined,
      technologyStack: [
        { id: 0, name: 'JavaFX' },
        { id: 1, name: 'Java' },
        { id: 2, name: 'Git' },
      ],
      media: [{
        id: 6,
        type: 'video',
        address:
          'https://res.cloudinary.com/dg9jxlzdz/video/upload/v1727644563/Tanks_promo_atsyqv.mp4',
        name: '',
        description: undefined,
      },
      {
        id: 7,
        type: 'video',
        address:
          'https://res.cloudinary.com/dg9jxlzdz/video/upload/v1727644550/Tanks_playthrough_gvboyr.mp4',
        name: '',
        description: undefined,
      },],
    },
    {
      id: 4,
      name: 'Plant Game',
      description:
        'The Plant Game is a mobile application that allows park visitors to engage in a fun and educational game while also assisting park owners with plant monitoring. Users select a plant to find, take a picture when they think they’ve found it, and the app identifies whether it’s the correct plant or not. The app also helps park owners by analyzing plant images to detect any issues. The front-end is built with Flutter/Dart, while the backend consists of multiple microservices developed in Java/Spring Boot and Python. Messaging between services is handled by RabbitMQ, with PostgreSQL and Firestore databases managing game instances. Plant recognition is powered by the PlantNet API.',
      gitUrl: undefined,
      accessUrl: undefined,
      technologyStack: [
        { id: 3, name: 'Flutter' },
        { id: 4, name: 'Dart' },
        { id: 5, name: 'Java' },
        { id: 6, name: 'Spring Boot' },
        { id: 7, name: 'RabbitMQ' },
        { id: 8, name: 'PostgreSQL' },
        { id: 9, name: 'Firebase' },
      ],
      media: [],
    },
    {
      id: 3,
      name: 'Recipe Web Service',
      description:
        'A web application where users can create an account, publish recipes, and view recipes shared by other users. It allows users to manage their recipes through add, edit, delete, and view functionalities. Recipes can be searched, sorted, and filtered based on various criteria. Users can also comment on and rate recipes, and view the profiles of other users.',
      gitUrl: 'https://github.com/M-Bell/Coursework',
      accessUrl: undefined,
      technologyStack: [
        { id: 10, name: 'Angular' },
        { id: 11, name: 'TypeScript' },
        { id: 12, name: 'Spring Boot' },
        { id: 13, name: 'PostgreSQL' },
      ],
      media: [
        {
          id: 0,
          type: 'img',
          address:
            'https://res.cloudinary.com/dg9jxlzdz/image/upload/v1727644480/cookshub_screen_1_ceacox.png',
          name: 'Main page',
          description: undefined,
        },
        {
          id: 1,
          type: 'img',
          address:
            'https://res.cloudinary.com/dg9jxlzdz/image/upload/v1727644478/cookshub_screen_3_nybnnw.png',
          name: 'Recipe page',
          description: undefined,
        },
        {
          id: 2,
          type: 'img',
          address:
            'https://res.cloudinary.com/dg9jxlzdz/image/upload/v1727644478/cookshub_screen_2_h6bful.png',
          name: 'User page',
          description: undefined,
        },
        {
          id: 3,
          type: 'img',
          address:
            'https://res.cloudinary.com/dg9jxlzdz/image/upload/v1727644477/cookshub_screen_4_cd41zl.png',
          name: 'Comment section',
          description: undefined,
        },
      ],
    },
    {
      id: 0,
      name: 'Portfolio Website',
      description:
        'A personal portfolio website to showcase my projects, skills, and experience. The website is built using Angular framework for the frontend and Java/Spring Boot backend API integration. It features a responsive design, dynamic project data, and smooth navigation.',
      gitUrl: 'https://github.com/M-Bell/Portfolio_FE',
      accessUrl: undefined,
      technologyStack: [
        { id: 14, name: 'Angular' },
        { id: 15, name: 'TypeScript' },
        { id: 16, name: 'Java' },
        { id: 17, name: 'Spring Boot' },
        { id: 18, name: 'CSS' },
        { id: 19, name: 'HTML' },
      ],
      media: [],
    },
    {
      id: 6,
      name: 'Speech Recognition AI App',
      description:
        'A speech recognition mobile app allowing users to convert speech to text and perform generative tasks. The application was developed with microservice architecture and using RabbitMQ for message queuing for communication between the services. The main REST API was developed with Java/Spring Boot, other two services for speech-to-text conversion and the use of ChatGPT API are made with Python, and front-end created with Flutter and Dart. The app uses external APIs like AssemblyAI for speech-to-text and ChatGPT API for generative tasks. Data is stored using Firebase for actual audio recordings and large text files, and PostgreSQL for structured data.',
      gitUrl: 'https://github.com/SpeechReco/SpeechRecFE',
      accessUrl: undefined,
      technologyStack: [
        { id: 20, name: 'Flutter' },
        { id: 21, name: 'Dart' },
        { id: 22, name: 'Java' },
        { id: 23, name: 'Spring Boot' },
        { id: 24, name: 'Python' },
        { id: 25, name: 'RabbitMQ' },
        { id: 26, name: 'Firebase' },
        { id: 27, name: 'PostgreSQL' },
      ],
      media: [
        {
          id: 5,
          type: 'img',
          address:
            'https://res.cloudinary.com/dg9jxlzdz/image/upload/v1727644566/Architecture_eng_v5gnnp.png',
          name: 'App architecture',
          description: undefined,
        },
        {
          id: 4,
          type: 'video',
          address:
            'https://res.cloudinary.com/dg9jxlzdz/video/upload/v1727644591/Application_demo_small_uhvry7.mp4',
          name: '',
          description: undefined,
        },
      ],
    },
  ];

  public getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: string | null): Observable<Project> {
    const project = this.projects.find(
      (project) => project.id === parseInt(id || '')
    );
    return of(project!);
  }

  getMediaByProjectId(mediaProjectId: number) : Observable<MediaData[]> {
    const project = this.projects.find(
      (project) => project.id === mediaProjectId
    );
    return of(project!.media!);
  }
}
