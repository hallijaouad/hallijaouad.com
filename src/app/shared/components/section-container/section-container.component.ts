import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  standalone: true,
  template: `
    <section [class]="'section-container ' + class">
      <ng-content></ng-content>
    </section>
  `
})
export class SectionContainerComponent {
  @Input() class = '';
}