import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementsModule } from './elements/elements.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'comps';
}
