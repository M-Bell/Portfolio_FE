import { Component, Input } from '@angular/core';
import { MediaData } from '../../../../../models/project.model';

@Component({
  selector: 'app-media-carousel',
  standalone: true,
  imports: [],
  templateUrl: './media-carousel.component.html',
  styleUrl: './media-carousel.component.css',
})
export class MediaCarouselComponent {
  @Input({ required: true })
  media!: MediaData[];
}
