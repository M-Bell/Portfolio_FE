import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-tag',
  standalone: true,
  imports: [],
  templateUrl: './technology-tag.component.html',
  styleUrl: './technology-tag.component.css'
})
export class TechnologyTagComponent {
  @Input({required: true})
  name!: string;
}
