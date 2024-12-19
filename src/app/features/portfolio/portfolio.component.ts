import { Component } from '@angular/core';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../../shared/interfaces/project.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SectionContainerComponent, SectionTitleComponent, ProjectCardComponent],
  template: `
    <app-section-container class="py-16">
      <app-section-title 
        title="Portfolio" 
        subtitle="Découvrez mes projets récents"
      />
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (project of projects; track project.id) {
          <app-project-card [project]="project" />
        }
      </div>
    </app-section-container>
  `
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce moderne avec panier, paiement et gestion des commandes.',
      imageUrl: 'assets/projects/ecommerce.jpg',
      technologies: ['Angular', 'NestJS', 'PostgreSQL'],
      githubUrl: 'https://github.com/username/ecommerce',
      demoUrl: 'https://demo-ecommerce.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec fonctionnalités collaboratives.',
      imageUrl: 'assets/projects/taskapp.jpg',
      technologies: ['Angular', 'Firebase', 'TailwindCSS'],
      githubUrl: 'https://github.com/username/taskapp'
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'Plateforme de blog avec éditeur Markdown et système de commentaires.',
      imageUrl: 'assets/projects/blog.jpg',
      technologies: ['Angular', 'MongoDB', 'Express'],
      demoUrl: 'https://demo-blog.com'
    }
  ];
}