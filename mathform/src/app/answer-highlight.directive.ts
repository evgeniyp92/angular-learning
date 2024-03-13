import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map, filter } from 'rxjs';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective {
  constructor(private element: ElementRef, private controlName: NgControl) {
    console.log('element', this.element);
    console.log('controlName', this.controlName.control);
  }

  ngOnInit() {
    // trying to access this inside the constructor will not work
    console.log('controlName', this.controlName.control);
    // you can access the parent control (that being the form itself) from the
    // control itself
    console.log('controlName', this.controlName.control?.parent);
    // subscribing to the rxjs observable
    this.controlName.control?.parent?.valueChanges
      .pipe(
        map((value) =>
          Math.abs((value.a + value.b - value.answer) / (value.a + value.b))
        )
        // filter((value) => value < 0.2)
      )
      .subscribe((value) => {
        if (value < 0.2) {
          this.element.nativeElement.classList.add('border-green-500');
        } else {
          this.element.nativeElement.classList.remove('border-green-500');
        }
      });
  }
}
