import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  // getting the root dom element thru dependency injection
  constructor(private el: ElementRef) {}

  // appending the modal to the root dom element
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }
}
