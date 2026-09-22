import { Component } from '@angular/core';

@Component({
  selector: 'app-pikachu',
  standalone: true,
  imports: [],
  templateUrl: './pikachu.component.html',
  styleUrl: './pikachu.component.css'
})
export class PikachuComponent {
  pokemon = {
    id: '025',
    nombre: 'Pikachu',
    tipo: 'Eléctrico',
    descripcion: 'Este Pokémon tiene unas bolsas en las mejillas donde almacena electricidad.',
    hp: 35,
    ataque: 55,
    defensa: 40,
    colorFondo: 'bg-yellow-600'
  };
}