import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import { BulbasaurComponent } from './components/bulbasaur/bulbasaur.component';
import { CharizardComponent } from './components/charizard/charizard.component';
import { GengarComponent } from './components/gengar/gengar.component';
import { JigglypuffComponent } from './components/jigglypuff/jigglypuff.component';
import { PikachuComponent } from './components/pikachu/pikachu.component';
import { SquirtleComponent } from './components/squirtle/squirtle.component';
import { PokemonDetallesComponent } from './components/pokemon-detalles/pokemon-detalles.component';
import { PokemonListaComponent } from './components/pokemon-lista/pokemon-lista.component';

export const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'buscador', component: BuscadorPokemonComponent },
  { path: 'balbasaur_manual', component: BulbasaurComponent },
  { path: 'charizard_manual', component: CharizardComponent },
  { path: 'gengar_manual', component: GengarComponent },
  { path: 'jigglypuff_manual', component: JigglypuffComponent },
  { path: 'pikachu_manual', component: PikachuComponent },
  { path: 'squirtle_manual', component: SquirtleComponent },
  { path: 'pokemon-lista', component: PokemonListaComponent },
  { path: 'pokemon/:name', component: PokemonDetallesComponent },
  { path: '**', redirectTo: 'registro' }
];