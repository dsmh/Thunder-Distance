import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distancia',
  standalone: true
})
export class DistanciaPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 1) {
      return `${(value * 1000).toFixed(2)} metros`;
    } else {
      return `${value.toFixed(2)} kilómetros`;
    }
  }
}
