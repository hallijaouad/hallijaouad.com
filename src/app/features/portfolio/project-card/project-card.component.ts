import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/interfaces/project.interface';
import { SkillBadgeComponent } from '../../../shared/components/skill-badge/skill-badge.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [SkillBadgeComponent],
  template: `
    <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        [src]="project.imageUrl" 
        [alt]="project.title"
        class="w-full h-48 object-cover"
      >
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          @for (tech of project.technologies; track tech) {
            <app-skill-badge [name]="tech" />
          }
        </div>
        
        <div class="flex gap-4">
          @if (project.githubUrl) {
            <a 
              [href]="project.githubUrl" 
              target="_blank" 
              class="text-primary-600 hover:text-primary-700"
            >
              GitHub
            </a>
          }
          @if (project.demoUrl) {
            <a 
              [href]="project.demoUrl" 
              target="_blank" 
              class="text-primary-600 hover:text-primary-700"
            >
              Demo
            </a>
          }
        </div>
      </div>
    </article>
  `
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}