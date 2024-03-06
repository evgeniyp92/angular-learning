import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  // setting up the constructor to bind and provide the element it was applied
  // to current implementation wont work due to a race condition (element is not
  // yet available when the directive is applied to the element)
  constructor(private element: ElementRef) {}

  // setting up the getter and setter for the backgroundColor property and using
  // the input decorator to bind the property to the directive
  // specify an alias in the decorator argument to bind the property to the directive
  @Input('appClass') set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
