import { Component } from '@angular/core';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionContainerComponent, SectionTitleComponent, SkillBadgeComponent],
  template: `
    <app-section-container class="py-16">
      <app-section-title 
        title="À propos de moi" 
        subtitle="Découvrez mon parcours et mes compétences"
      />
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold mb-4">Mon Parcours</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Fort de plusieurs années d'expérience dans le développement web, je me spécialise 
            dans la création d'applications modernes et performantes. Ma passion pour les 
            nouvelles technologies me pousse à constamment me former et à adopter les 
            meilleures pratiques du secteur.
          </p>
          
          <h3 class="text-2xl font-semibold mb-4">Philosophie de développement</h3>
          <ul class="space-y-4 text-gray-600 dark:text-gray-300">
            <li>• Code propre et maintenable</li>
            <li>• Tests automatisés</li>
            <li>• Performance et optimisation</li>
            <li>• Expérience utilisateur au centre des décisions</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-2xl font-semibold mb-4">Compétences techniques</h3>
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium mb-3">Frontend</h4>
              <div class="flex flex-wrap gap-2">
                <app-skill-badge name="Angular" />
                <app-skill-badge name="TypeScript" />
                <app-skill-badge name="TailwindCSS" />
                <app-skill-badge name="RxJS" />
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-medium mb-3">Backend</h4>
              <div class="flex flex-wrap gap-2">
                <app-skill-badge name="NestJS" />
                <app-skill-badge name="Node.js" />
                <app-skill-badge name="PostgreSQL" />
                <app-skill-badge name="MongoDB" />
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-medium mb-3">DevOps & Outils</h4>
              <div class="flex flex-wrap gap-2">
                <app-skill-badge name="Docker" />
                <app-skill-badge name="Git" />
                <app-skill-badge name="CI/CD" />
                <app-skill-badge name="AWS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-section-container>
  `
})
export class AboutComponent {}