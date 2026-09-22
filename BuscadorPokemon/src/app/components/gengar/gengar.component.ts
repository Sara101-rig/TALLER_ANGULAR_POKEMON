import { Component } from '@angular/core';

@Component({
  selector: 'app-gengar',
  standalone: true,
  imports: [],
  templateUrl: './gengar.component.html',
  styleUrl: './gengar.component.css'
})
export class GengarComponent {
  pokemon = {
    id: '094',
    nombre: 'Gengar',
    tipo: 'Fantasma / Veneno',
    descripcion: 'Se oculta en las sombras. Se dice que el lugar que habita se enfría de repente.',
    hp: 60,
    ataque: 65,
    defensa: 60,
    colorFondo: 'bg-purple-800'
  };
}