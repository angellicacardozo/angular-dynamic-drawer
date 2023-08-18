import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Component, Injector, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum DrawerCommand {
  Open = 'open',
  Close = 'close',
}

export const DRAWER_DATA_INJECTION_TOKEN = new InjectionToken<string>('DRAWER_DATA_INJECTION_TOKEN');

@Injectable({
  providedIn: 'root',
})
export class DrawerFacadeService {
  private commandSource = new BehaviorSubject<DrawerCommand>(
    DrawerCommand.Close
  );
  private portalRef = null;

  open(outletComponent, data) {
    const portal = new ComponentPortal(
      outletComponent,
      null,
      Injector.create({
        providers: [{
          provide: DRAWER_DATA_INJECTION_TOKEN,
          useValue: data
        }],
      })
    );

    this.portalRef = portal;
    this.command = DrawerCommand.Open;
  }

  get stateChanges() {
    return this.commandSource.asObservable();
  }

  get component() {
    return this.portalRef;
  }

  set command(value: DrawerCommand) {
    this.commandSource.next(value);
  }
}
