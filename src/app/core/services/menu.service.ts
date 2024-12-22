import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    // Signal pour suivre l'élément de menu actif
    private activeMenuItem = signal<string | null>(null);

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.setActiveMenuItem(event.url);
            }
        });
    }

    /**
     * Getter pour obtenir le menu actif
     */
    getActiveMenuItem() {
        return this.activeMenuItem();
    }

    /**
     * Setter pour définir un nouveau menu actif
     */
    setActiveMenuItem(menuItem: string) {
        this.activeMenuItem.set(menuItem);
    }

    /**
     * Réinitialiser le menu actif
     */
    resetActiveMenuItem() {
        this.activeMenuItem.set(null);
    }
}
