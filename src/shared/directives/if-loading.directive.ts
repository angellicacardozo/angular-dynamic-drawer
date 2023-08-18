import {
  Directive,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export type Loaded<T> = { type: 'loaded'; data: T };

export type Loading = { type: 'loading' };

export type LoadingState<T> = Loaded<T> | Loading;

@Directive({
  selector: '[appIfLoading]',
})
export class IfLoading<T> {
  private isViewCreated = false;

  @HostListener('click') onClick() {
    console.log('click');
  }

  @Input('appIfLoading') set state(state: LoadingState<T>) {
    console.log(state);
    //this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<unknown>
  ) {}
}
