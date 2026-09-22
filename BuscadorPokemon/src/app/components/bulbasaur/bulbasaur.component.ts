import { Component } from '@angular/core';

@Component({
  selector: 'app-bulbasaur',
  standalone: true,
  imports: [],
  templateUrl: './bulbasaur.component.html',
  styleUrl: './bulbasaur.component.css'
})
export class BulbasaurComponent {
  pokemon = {
    id: '001',
    nombre: 'Bulbasaur',
    tipo: 'Planta / Veneno',
    descripcion: 'Este Pokémon nace con una semilla en el lomo, que brota con el tiempo absorbiendo los rayos del sol.',
    hp: 45,
    ataque: 49,
    defensa: 49,
    colorFondo: 'bg-green-700'
  };
}