import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalOutlet,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerContentDirective } from '../shared/directives/drawer-content.directive';
import {
  DrawerFacadeService,
  DrawerCommand,
} from '../shared/services/drawer.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ContentChild(DrawerContentDirective)
  drawerContent!: DrawerContentDirective;
  @ViewChild(CdkPortalOutlet, { static: false }) portalOutlet: PortalOutlet;

  title = 'my-app';

  constructor(
    private drawerFacadeService: DrawerFacadeService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.drawerFacadeService.stateChanges.subscribe({
      next: (value) => {
        if (value === DrawerCommand.Open) {
          this.drawer?.open();
        }
      },
    });
  }

  get currentOutlet() {
    if (!this.drawerFacadeService.component) {
      return null;
    }

    return this.drawerFacadeService.component;
  }
}
