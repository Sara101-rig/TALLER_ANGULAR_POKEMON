import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonStorage } from '../../services/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-detalles',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './pokemon-detalles.component.css',
  templateUrl: './pokemon-detalles.component.html'
})
export class PokemonDetallesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pokeService = inject(PokemonStorage);

  pokemonData: any = null;
  cargando = false;

  ngOnInit(): void {
    const pokeName = this.route.snapshot.params['name'];

    this.cargando = true;

    this.pokeService.consultarPokemon(pokeName).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('No se pudo cargar el Pokémon', err);
        this.cargando = false;
      }
    });
  }
}