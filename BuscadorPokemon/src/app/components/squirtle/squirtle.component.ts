import { Component } from '@angular/core';

@Component({
  selector: 'app-squirtle',
  standalone: true,
  imports: [],
  templateUrl: './squirtle.component.html',
  styleUrl: './squirtle.component.css'
})
export class SquirtleComponent {
  pokemon = {
    id: '007',
    nombre: 'Squirtle',
    tipo: 'Agua',
    descripcion: 'Retrae su largo cuello en el caparazón para disparar agua a presión con gran fuerza.',
    hp: 44,
    ataque: 48,
    defensa: 65,
    colorFondo: 'bg-blue-600'
  };
}