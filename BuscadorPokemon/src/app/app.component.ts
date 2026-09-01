import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService, Pokemon } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private pokemonService = inject(PokemonService);

  termino = signal('ditto');
  pokemon = signal<Pokemon | null>(null);
  cargando = signal(false);
  error = signal<string | null>(null);

  buscar(): void {
    const valor = this.termino().trim();
    if (!valor) {
      this.error.set('Escribe el nombre de un Pokémon.');
      this.pokemon.set(null);
      return;
    }

    this.cargando.set(true);
    this.error.set(null);
    this.pokemon.set(null);

    this.pokemonService.buscarPokemon(valor).subscribe({
      next: (data) => {
        this.pokemon.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(`No se encontró ningún Pokémon llamado "${valor}".`);
        this.cargando.set(false);
      },
    });
  }
}
