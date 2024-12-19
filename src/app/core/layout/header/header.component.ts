import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav class="section-container flex items-center justify-between h-16">
        <a routerLink="/" class="text-xl font-bold">Jaouad Halli</a>
        <div class="flex gap-6">
          <a routerLink="/home" class="hover:text-primary-500">Accueil</a>
          <a routerLink="/about" class="hover:text-primary-500">À propos</a>          
          <a routerLink="/contact" class="hover:text-primary-500">Contact</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}