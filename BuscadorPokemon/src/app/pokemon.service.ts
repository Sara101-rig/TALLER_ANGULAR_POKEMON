import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Pokemon {
  nombre: string;
  imagen: string;
}

// Estructura parcial de la respuesta de la PokeAPI que nos interesa
interface PokeApiResponse {
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      ['official-artwork']?: {
        front_default: string | null;
      };
    };
  };
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  // Consulta un Pokémon por nombre y devuelve solo nombre e imagen
  buscarPokemon(nombre: string): Observable<Pokemon> {
    const consulta = nombre.trim().toLowerCase();
    return this.http.get<PokeApiResponse>(`${this.baseUrl}/${consulta}`).pipe(
      map((res) => ({
        nombre: res.name,
        imagen:
          res.sprites.other?.['official-artwork']?.front_default ??
          res.sprites.front_default ??
          '',
      }))
    );
  }
}
