import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  @Input() backgroundColor: string = '';
  // setting up the constructor to bind and provide the element it was applied
  // to current implementation wont work due to a race condition (element is not
  // yet available when the directive is applied to the element)
  constructor(private element: ElementRef) {
    // never do this!!! this is a hack
    setTimeout(() => {
      this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    }, 500);
  }
}
