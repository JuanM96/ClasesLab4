import { Directive,ElementRef,Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirectiva2]'
})
export class Directiva2Directive {

  constructor(private obj:ElementRef,private renderizador:Renderer2) { 
    this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","yellow");
   }

}
