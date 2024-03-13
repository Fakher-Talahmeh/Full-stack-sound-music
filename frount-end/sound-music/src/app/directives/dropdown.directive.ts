import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}
  @HostBinding("class.open") isOpen = false;
  @HostListener('click') toggleOpen(){
    if(this.isOpen == false)
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:click', ['$event'])
  toggleOpenOnClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
