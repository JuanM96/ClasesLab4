import { Directive,ElementRef,Renderer2,OnInit,Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDirectiva5]'
})
export class Directiva5Directive {
  //@Input() color:string;
  @Input("appDirectiva5") color:string;
  functionOver:Function;
  functionOut:Function;
  constructor(private obj:ElementRef,private renderizador:Renderer2) { 

   }
   ngOnDestroy() :void{
    this.functionOut();
    this.functionOver();
   }
   ngOnInit(): void{
    if (this.color == "") {
      this.color = "pink";
    }
    this.functionOver = this.renderizador.listen(this.obj.nativeElement,'mouseover',e => {
      this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","red");
    });
    this.functionOut = this.renderizador.listen(this.obj.nativeElement,'mouseout',e => {
      this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor","blue");
    });
    //this.renderizador.setStyle(this.obj.nativeElement,"backgroundColor",this.color);
    
    //this.renderizador.setProperty(this.obj.nativeElement,"textContent","Hola Mundo");
    
   }
   
}