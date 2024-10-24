import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomHeader]',
  standalone: true
})
export class CustomHeaderDirective {

  constructor() { }

  @HostBinding('class')
  get classList() {
    return ''
  }

}
