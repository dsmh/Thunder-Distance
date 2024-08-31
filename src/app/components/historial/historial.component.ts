import { Component, Input } from '@angular/core';
import { HistorialDistancias } from '../../app.component';
import { DistanciaPipe } from '../../pipes/distancia.pipe';
import { CommonModule } from '@angular/common';
import { PromediosPipe } from '../../pipes/promedios.pipe';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [DistanciaPipe, CommonModule, PromediosPipe],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export class HistorialComponent {
  isCollapsed = true;
  @Input() listaDistancias: HistorialDistancias[] = []

  toggleHistory() {
    this.isCollapsed = !this.isCollapsed;
  }
}
