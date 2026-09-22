import { Component } from '@angular/core';

@Component({
  selector: 'app-charizard',
  standalone: true,
  imports: [],
  templateUrl: './charizard.component.html',
  styleUrl: './charizard.component.css'
})
export class CharizardComponent {
  pokemon = {
    id: '006',
    nombre: 'Charizard',
    tipo: 'Fuego / Volador',
    descripcion: 'Capaz de derretir cualquier cosa con llamas incandescentes capaces de fundir rocas.',
    hp: 78,
    ataque: 84,
    defensa: 78,
    colorFondo: 'bg-orange-600'
  };
}
