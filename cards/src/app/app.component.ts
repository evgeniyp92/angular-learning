import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // must import component here for child to render
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageURL: 'assets/tree.jpg',
      content: 'I saw this neat tree today!',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainlover89',
      imageURL: 'assets/mountain.jpg',
      content: 'Picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'biking420',
      imageURL: 'assets/biking.jpg',
      content: 'I did some biking today!',
    },
  ];
}
