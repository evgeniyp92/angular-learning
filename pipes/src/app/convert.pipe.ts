import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true,
})
export class ConvertPipe implements PipeTransform {
  transform(value: number | null, targetUnit: string): unknown {
    if (!value) {
      return '';
    }

    switch (targetUnit) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1609.34;
      case 'cm':
        return value * 1609340;
      default:
        throw new Error('Target unit not supported');
    }
  }
}
