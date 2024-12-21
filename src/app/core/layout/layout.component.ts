import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="min-h-screen pt-24 from-blue-50" >
      <router-outlet></router-outlet>
    </main>
  `
})
export class LayoutComponent {}