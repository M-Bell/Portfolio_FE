import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import {  MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatCard, MatCardContent, MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  mode: ProgressSpinnerMode = 'indeterminate';
}
