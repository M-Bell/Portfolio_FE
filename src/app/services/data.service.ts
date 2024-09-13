import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mockProjects: Project[] = [
    {
      id: 0,
      name: 'Portfolio Website',
      imageSrc: 'assets/images/portfolio.png',
      technologyStack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'CSS', 'HTML'],
      description: 'A personal portfolio website to showcase my projects, skills, and experience. The website is built using pure Angular for the frontend and Java/Spring Boot backend API integration. It features a responsive design, dynamic project data, and smooth navigation.',
      gitUrl: 'https://github.com/username/portfolio-website',
      mediaId: [0, 1,2,3,4,5]

    },
    {
      id:1,
      name: 'E-Commerce Storefront',
      technologyStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      description: 'A full-stack e-commerce platform with a shopping cart, product search, and secure checkout features.'
    },
    {
      id:2,
      name: 'Real-Time Chat Application',
      technologyStack: ['Angular', 'Firebase', 'RxJS', 'SCSS'],
      description: 'A real-time messaging application using Firebase for authentication and real-time database.'
    },
    {
      id:3,
      name: 'Task Management App',
      technologyStack: ['Vue.js', 'JavaScript', 'Bootstrap', 'Firebase'],
      description: 'A task management tool that allows users to organize tasks, set deadlines, and collaborate with teams.'
    },
    {
      id:4,
      name: 'Weather Dashboard',
      technologyStack: ['React', 'OpenWeather API', 'JavaScript', 'CSS'],
      description: 'A dashboard that fetches real-time weather data from the OpenWeather API, showing forecasts and current conditions for selected cities.'
    },
    {
      id:5,
      name: 'Blog Platform',
      technologyStack: ['Next.js', 'GraphQL', 'Tailwind CSS'],
      description: 'A modern blog platform that supports markdown content creation and dynamic routing using Next.js and GraphQL.'
    },
    {
      id:6,
      name: 'Fitness Tracker',
      technologyStack: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      description: 'A mobile application that tracks users’ fitness activities and provides personalized workout recommendations.'
    }
  ];

  constructor() { }

}
