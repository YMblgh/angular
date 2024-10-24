import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'red'
  }

  @HostBinding('class')
  get a() {
    return ''
  }

}
