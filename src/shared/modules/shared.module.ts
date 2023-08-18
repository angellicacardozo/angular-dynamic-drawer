import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortalModule } from '@angular/cdk/portal';
import { MaterialModule } from './material.module';
import { DrawerContentDirective } from '../directives/drawer-content.directive';
import { AsyncAssistChipComponent } from '../components/async-assist-chip/async-assist-chip.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    PortalModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [DrawerContentDirective, AsyncAssistChipComponent],
  exports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    PortalModule,
    ReactiveFormsModule,
    HttpClientModule,
    AsyncAssistChipComponent,
  ],
})
export class SharedModule {}
