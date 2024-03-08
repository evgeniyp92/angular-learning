import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  // The @Output decorator is used to create an event emitter that emits an event when the form is submitted.
  @Output() submitted = new EventEmitter<string>();

  term = '';

  onInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    // The emit method is used to emit the submitted event with the term as the payload.
    this.submitted.emit(this.term);
  }
}
