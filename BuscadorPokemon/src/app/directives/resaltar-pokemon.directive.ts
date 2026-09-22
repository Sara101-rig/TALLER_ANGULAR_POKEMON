import { Directive, ElementRef, HostListener, inject,input} from '@angular/core';
//Creación del atributo para ser usado en el HTML/CSS
@Directive({
  selector: '[appResaltarPokemon]',
  standalone: true
})
// Creacion de la clase ResaltarPokemon
export class ResaltarPokemonDirective {
  private el = inject(ElementRef);

  colorBorde = input<string>('#FFFF00');

 @HostListener('mouseenter') onMouseEnter(){
    this.aplicarEfecto(`3xp solid ${this.colorBorde()}`,'scale(1)', 'none');
}
//Uso de Hostliner para capturar eventos y señales dentro del DOM
@HostListener('mouseleave') onMouseLeave(){
this.aplicarEfecto(`1px solid ⬛e0e0e0`,'scale(1)','0 8px 16px ⬛rgba(0,0,0,0.15)');
}
aplicarEfecto(borde: string, escala: string, sombra: string){
const elemento = this.el.nativeElement;
elemento.style.border = borde;
elemento.style.transform = escala;
elemento.style.boxShadow = sombra;
elemento.style.transition = 'all 0.25s ease-in-out';
}
}