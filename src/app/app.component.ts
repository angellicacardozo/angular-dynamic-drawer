import { CdkPortalOutlet, PortalOutlet } from '@angular/cdk/portal';
import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
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
  @ViewChild(CdkPortalOutlet, { static: false }) portalOutlet: PortalOutlet;

  title = 'my-app';

  constructor(private drawerFacadeService: DrawerFacadeService) {}

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
