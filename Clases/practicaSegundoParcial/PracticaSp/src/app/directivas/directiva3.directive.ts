import { Directive,ElementRef,Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiva3]'
})
export class Directiva3Directive {

  constructor(private obj:ElementRef,private renderizador:Renderer2) { 

   }
   ngOnInit(): void{
    this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","green");
    this.renderizador.setProperty(this.obj.nativeElement,"textContent","Hola Mundo");
   }
}