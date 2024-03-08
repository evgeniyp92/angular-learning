import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  term = '';

  onInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log(this.term);
  }
}
