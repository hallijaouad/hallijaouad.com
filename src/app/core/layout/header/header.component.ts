import {Component, computed, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MenuService} from "../../services/menu.service";
import {Menu} from "../../constants/menu";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    template: `
        <header class="fixed w-full bg-gray-800 dark:bg-gray-900 shadow-md z-50">
            <nav class="section-container flex items-center justify-between h-16">
                <a routerLink="/" class="text-xl font-bold text-white">Jaouad HALLI</a>
                <div class="flex gap-6">
                    @for (item of menuItems; track item.index) {
                        <a 
                                routerLink="{{ item.route }}"
                                class="text-white hover:text-white {{itemOpacity}}"
                                [class.opacity-100]="isActive(item.route)"
                                [class.opacity-65]="!isActive(item.route)"
                        >{{ item.label }}</a>
                    }
                </div>
            </nav>
        </header>
    `
})
export class HeaderComponent {

    menuItems = Menu.items;

    public menuService = inject(MenuService);

    itemOpacity: string = 'opacity-65';
    // Signal pour obtenir le menu actif
    activeMenuItem = computed(() => this.menuService.getActiveMenuItem());
    constructor() {
        if(!this.activeMenuItem()) {
            this.menuService.setActiveMenuItem('/home')
        }
    }
    /**
     * Vérifie si un élément est actif
     */
    isActive(item: string): boolean {
        return this.activeMenuItem() === item;
    }
}