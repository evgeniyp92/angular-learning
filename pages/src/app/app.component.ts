import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
    },
    {
      title: 'At the Park',
      url: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f',
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5',
    },
  ];
}
