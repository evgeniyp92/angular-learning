import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css',
})
export class ViewsHomeComponent {
  public stats = [
    { value: 420, label: 'Users' },
    { value: 900, label: '$ of Revenue' },
    { value: 69, label: 'Reviews' },
  ];
  public items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in',
    },
  ];
}
