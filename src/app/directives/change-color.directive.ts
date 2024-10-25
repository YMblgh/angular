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
  get bindClasses() {
    return 'bg-red-100 px-4 py-2 rounded-lg hover:shadow-lg'
  }

  @HostListener('click', ['$event'])
  handleClick(e: MouseEvent) {
    console.log('log from directive event!');
  }

}
