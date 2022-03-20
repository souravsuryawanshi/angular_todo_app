// import { ElementRef, Renderer2, Directive } from '@angular/core';

// @Directive({
//   selector: 'input:not([type=submit])[ng2focus], textarea[ng2focus]',
// })
// export class Ng2Focus {
//   constructor(private renderer: Renderer2) {}

//   ngAfterContentInit() {
//     this.renderer.selectRootElement('#my-field').focus();
//   }
// }

// import { Directive, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[autofocus]',
// })
// export class AutofocusDirective {
//   constructor(private host: ElementRef) {}

//   ngAfterViewInit() {
//     this.host.nativeElement.focus();
//   }
// }

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autofocus]',
})
export class AutofocusDirective {
  private focus = true;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.focus) {
      //Otherwise Angular throws error: Expression has changed after it was checked.
      window.setTimeout(() => {
        this.el.nativeElement.focus(); //For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
      });
    }
  }

  @Input() set autofocus(condition: boolean) {
    this.focus = condition !== false;
  }
}
