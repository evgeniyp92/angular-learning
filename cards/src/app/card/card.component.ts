import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // tell the component how to receive props
  @Input() title = '';
  @Input() imageURL = '';
  @Input() username = '';
  @Input() content = '';
}
