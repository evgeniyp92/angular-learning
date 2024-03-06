import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true,
})
export class TimesDirective {
  // viewContainer is what the directive was applied to
  // templateRef is the elements to be placed inside of the directive
  constructor(
    private viewContainer: ViewContainerRef, // lets us easily append elements to the DOM
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(times: number) {
    // purge the viewContainer of any elements
    this.viewContainer.clear();
    // create a new embedded view for each time
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
