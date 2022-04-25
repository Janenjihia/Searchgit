import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  el: any;

  constructor(_privateelement:ElementRef) { }
  


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}