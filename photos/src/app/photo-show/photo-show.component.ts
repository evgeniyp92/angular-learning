import { Component } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.css',
})
export class PhotoShowComponent {
  constructor(private photoFetchService: PhotoFetchService) {}

  public photoLink: string = '';
  public didFetch: boolean = false;

  handleClick() {
    console.log('The button was clicked');
    this.photoFetchService.search().subscribe((response) => {
      this.photoLink = response;
      this.didFetch = true;
    });
  }
}
