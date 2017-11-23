import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {

  constructor(public obj:ElementRef) {
    this.obj.nativeElement.style.backgroundColor = "red";
   }

}
