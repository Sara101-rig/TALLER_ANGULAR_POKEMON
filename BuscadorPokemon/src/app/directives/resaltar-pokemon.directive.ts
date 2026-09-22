import { Directive, ElementRef, HostListener, inject,input} from '@angular/core';

@Directive({
  selector: '[appResaltarPokemon]',
  standalone: true
})
export class ResaltarPokemonDirective {
  private el = inject(ElementRef);

  colorBorde = input<string>('#FFFF00');

  @HostListener('mouseenter') onMouseEnter() {
    this.aplicarEfecto()

    aplicarEfecto(borde: String, escala: String, sombra: String){
      const elemneto = this.el.nativeElement
      elemneto.style.border = borde;
      elemneto.style.transform = escala;
      

    }
  }

}
