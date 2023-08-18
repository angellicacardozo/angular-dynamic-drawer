import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-async-assist-chip',
  templateUrl: './async-assist-chip.component.html',
  styleUrls: ['./async-assist-chip.component.css'],
})
export class AsyncAssistChipComponent {
  data$!: Observable<unknown>;

  @Input() source: Observable<unknown>;

  constructor() {
    this.data$ = of({});
  }

  onClick() {
    this.data$ = this.source;
  }
}
