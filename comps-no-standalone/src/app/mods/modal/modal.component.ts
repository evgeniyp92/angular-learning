import {
  Component,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  // getting the root dom element thru dependency injection
  constructor(private el: ElementRef) {}

  // appending the modal to the root dom element ngOnInit is a lifecycle hook
  // that is called once after the component is first displayed on screen and
  // after Angular has set props passed from parent component
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  // remove the modal from the dom when the component is destroyed
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
