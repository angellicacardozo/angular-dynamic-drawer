import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDrawerContent]',
})
export class DrawerContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
