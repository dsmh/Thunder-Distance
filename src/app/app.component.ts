import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DistanciaPipe } from './pipes/distancia.pipe';
import { HistorialComponent } from './components/historial/historial.component';

export interface HistorialDistancias {
  distancia: number;
  tiempo: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DistanciaPipe, HistorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  isTimerRunning = false;
  startTime: number | null = null;
  distance: number | null = null;
  listaDistancias: HistorialDistancias[] = [];

  toggleTimer() {
    if (!this.isTimerRunning) {
      this.startTime = Date.now();
      this.isTimerRunning = true;
      this.distance = null;
    } else {
      const endTime = Date.now();
      const timeDiff = (endTime - (this.startTime || 0)) / 1000; // Convertir a segundos
      this.distance = this.calculateDistance(timeDiff);
      this.isTimerRunning = false;
      this.startTime = null;
      this.agregarItem({distancia: this.distance, tiempo: timeDiff});
    }
  }

  calculateDistance(timeDiff: number): number {
    // Velocidad del sonido aproximada: 340 m/s
    const speedOfSound = 340;
    return (timeDiff * speedOfSound) / 1000; // Convertir a kilómetros
  }

  agregarItem(item: HistorialDistancias): void {
    const historialActual = this.listaDistancias
    const nuevoHistorial = [item, ...historialActual];
    
    // Opcional: Limitar el historial a un número máximo de elementos
    const MAX_ITEMS = 10;
    if (nuevoHistorial.length > MAX_ITEMS) {
      nuevoHistorial.pop();
    }
    this.listaDistancias = nuevoHistorial;
  }


}
