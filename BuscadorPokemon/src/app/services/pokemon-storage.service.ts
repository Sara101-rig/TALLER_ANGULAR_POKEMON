import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, signal, Service } from '@angular/core';


export interface PokemonTarjeta {
 id: number;
 nombre: string;
 imagen: string;
 tipo: string;
 baseExperience: string;
 esFavorito?: boolean;

}
@Service()
@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {
  private http = inject(HttpClient)
  private readonly STROGE_KEY = 'equipo_pokemon_registrado';

  misPokemons = signal<PokemonTarjeta[]
}
