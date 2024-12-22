import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
      {{ title }}
      @if (subtitle) {
        <span class="block text-xl md:text-2xl text-primary-600 mt-2">{{ subtitle }}</span>
      }
    </h2>
  `
})
export class SectionTitleComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
}