import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  // setting up the constructor to bind and provide the element it was applied to
  constructor(private element: ElementRef) {
    console.log(`class directive used`);
    this.element.nativeElement.style.backgroundColor = 'orange';
  }
}
