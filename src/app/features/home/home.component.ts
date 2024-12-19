import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionContainerComponent],
  template: `
    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <app-section-container>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              Jaouad Halli
              <span class="block text-primary-600 mt-2">Ingénieur Développeur</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Passionné par le développement web et les technologies modernes.
              Spécialisé en Angular, NestJS et architecture cloud.
            </p>
            <a routerLink="/about" class="btn-primary">En savoir plus</a>
          </div>
          <div class="relative">
            <div class="aspect-square rounded-full overflow-hidden shadow-xl">
              <img 
                src="assets/profile.jpg" 
                alt="Jaouad Halli"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
      </app-section-container>
      </div>
  `
})
export class HomeComponent {}