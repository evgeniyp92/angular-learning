import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() items: { title: string; content: string }[] = [];
  openedItemIndex: number = 0;

  setOpenedItem(index: number) {
    this.openedItemIndex = index;
  }
}
