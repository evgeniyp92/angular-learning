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

  ngOnInit() {
    this.fetchPhoto();
  }

  handleClick() {
    this.fetchPhoto();
  }

  private fetchPhoto() {
    this.didFetch = false;
    this.photoFetchService.search().subscribe((response) => {
      this.photoLink = response;
      this.didFetch = true;
    });
  }
}
