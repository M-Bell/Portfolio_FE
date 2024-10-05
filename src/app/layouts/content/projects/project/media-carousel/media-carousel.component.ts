import { Component, Input, OnInit } from '@angular/core';
import { MediaData } from '../../../../../models/project.model';
import { DataService } from '../../../../../services/data.service';

@Component({
  selector: 'app-media-carousel',
  standalone: true,
  imports: [],
  templateUrl: './media-carousel.component.html',
  styleUrl: './media-carousel.component.css',
})
export class MediaCarouselComponent implements OnInit {
  @Input({ required: true })
  mediaProjectId!: number;

  mediaData!: MediaData[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getMediaByProjectId(this.mediaProjectId)
      .subscribe((data) => (this.mediaData = data));
  }

  checkActiveVideo() {
    // Select the carousel by its ID
    const carousel: HTMLElement | null = document.getElementById(
      'carouselExampleCaptions'
    );

    if (!carousel) {
      console.error(
        `Carousel with ID "${'carouselExampleCaptions'}" not found.`
      );
      return;
    }

    const videos: NodeListOf<HTMLVideoElement> =
      document.querySelectorAll('video');

    videos.forEach((video: HTMLVideoElement) => {
      video.pause();
      video.currentTime = 0;
    });
  }
}
