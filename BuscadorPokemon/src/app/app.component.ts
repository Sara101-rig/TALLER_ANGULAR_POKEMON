import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaPokemones = [
    {
      id: '001',
      nombre: 'Bulbasaur',
      tipo: 'Planta / Veneno',
      descripcion: 'Este Pokémon nace con una semilla en el lomo, que brota con el tiempo absorbiendo los rayos del sol.',
      hp: 45, ataque: 49, defensa: 49,
      colorFondo: 'background-color: #15803d;',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
      id: '025',
      nombre: 'Pikachu',
      tipo: 'Eléctrico',
      descripcion: 'Este Pokémon tiene unas bolsas en las mejillas donde almacena electricidad.',
      hp: 35, ataque: 55, defensa: 40,
      colorFondo: 'background-color: #ca8a04;',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    },
    {
      id: '006',
      nombre: 'Charizard',
      tipo: 'Fuego / Volador',
      descripcion: 'Capaz de derretir cualquier cosa con llamas incandescentes capaces de fundir rocas.',
      hp: 78, ataque: 84, defensa: 78,
      colorFondo: 'background-color: #c2410c;',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
    },
    {
      id: '094',
      nombre: 'Gengar',
      tipo: 'Fantasma / Veneno',
      descripcion: 'Se oculta en las sombras. Se dice que el lugar que habita se enfría de repente.',
      hp: 60, ataque: 65, defensa: 60,
      colorFondo: 'background-color: #6b21a8;',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png'
    },
    {
      id: '039',
      nombre: 'Jigglypuff',
      tipo: 'Normal / Hada',
      descripcion: 'Utiliza sus cautivadores ojos para adormecer a sus enemigos cantando una melodía.',
      hp: 115, ataque: 45, defensa: 20,
      colorFondo: 'background-color: #db2777;',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
    },
    {
      id: '007',
      nombre: 'Squirtle',
      tipo: 'Agua',
      descripcion: 'Retrae su largo cuello en el caparazón para disparar agua a presión con gran fuerza.',
      hp: 44, ataque: 48, defensa: 65,
      colorFondo: 'background-color: #2563eb;',
      imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    }
  ];

  pokemonSeleccionado = signal(this.listaPokemones[0]);

  seleccionar(p: any) {
    this.pokemonSeleccionado.set(p);
  }
}