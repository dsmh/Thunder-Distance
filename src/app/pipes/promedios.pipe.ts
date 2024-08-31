import { Pipe, PipeTransform } from '@angular/core';
import { HistorialDistancias } from '../app.component';

@Pipe({
  name: 'promedios',
  standalone: true
})
export class PromediosPipe implements PipeTransform {

 /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(value: HistorialDistancias[]): number {
    const cantidadDistancias = value.length;
    if (cantidadDistancias > 1) {
      let suma = 0;
      for(let item of value){
        suma = suma + item.distancia;
      }
      return (suma/cantidadDistancias)
    } else {
      return value[0].distancia
    }
  }
}
