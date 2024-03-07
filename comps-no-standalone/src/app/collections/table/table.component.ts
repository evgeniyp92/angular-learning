import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() classNames = '';
  // hack to make angular happy, replace later with a proper interface
  @Input() data: any[] = [];
  @Input() headers: { key: string; label: string }[] = [];
  constructor() {}
}
