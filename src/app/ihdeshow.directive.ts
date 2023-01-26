import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIhdeshow]'
})
export class IhdeshowDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.color= 'Green';

  }

}
