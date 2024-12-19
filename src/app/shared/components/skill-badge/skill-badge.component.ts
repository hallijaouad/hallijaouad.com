import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  template: `
    <div class="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
      {{ name }}
    </div>
  `
})
export class SkillBadgeComponent {
  @Input({ required: true }) name!: string;
}