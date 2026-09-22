import { Component } from '@angular/core';

@Component({
  selector: 'app-jigglypuff',
  standalone: true,
  imports: [],
  templateUrl: './jigglypuff.component.html',
  styleUrl: './jigglypuff.component.css'
})
export class JigglypuffComponent {
  pokemon = {
    id: '039',
    nombre: 'Jigglypuff',
    tipo: 'Normal / Hada',
    descripcion: 'Utiliza sus cautivadores ojos para adormecer a sus enemigos cantando una melodía.',
    hp: 115,
    ataque: 45,
    defensa: 20,
    colorFondo: 'bg-pink-600'
  };
}