import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenmenu]'
})
export class OpenmenuDirective {

  @HostBinding('class.open') isopened = false;

  constructor() { }

  @HostListener('click') onClicked() {
    this.isopened = !this.isopened
  }

}
