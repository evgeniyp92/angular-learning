import { Component } from '@angular/core';
// for ngFor to work this below MUST be imported and declared in the decorator
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // must import component here for child to render
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageURL: 'assets/tree.jpeg',
      content: 'I saw this neat tree today!',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainlover89',
      imageURL: 'assets/mountain.jpeg',
      content: 'Picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'biking420',
      imageURL: 'assets/biking.jpeg',
      content: 'I did some biking today!',
    },
  ];
}
