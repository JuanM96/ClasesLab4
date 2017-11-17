import { Directive,ElementRef,Renderer2,OnInit,Input } from '@angular/core';

@Directive({
  selector: '[appDirectiva4]'
})
export class Directiva4Directive {
  //@Input() color:string;
  @Input("appDirectiva4") color:string;
  
  constructor(private obj:ElementRef,private renderizador:Renderer2) { 

   }
   ngOnInit(): void{
    if (this.color == "") {
      this.color = "pink";
    }
    this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor",this.color);
    //this.renderizador.setProperty(this.obj.nativeElement,"textContent","Hola Mundo");
   }
}