import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SectionContainerComponent} from '../../shared/components/section-container/section-container.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, SectionContainerComponent],
    template: `
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 h-full">
            <app-section-container>
                <div class="grid grid-flow-row-dense md:grid-cols-3 ms:grid-cols-2 gap-12 items-center">
                    <div class="col-span-2">
                        <h1 class="text-4xl md:text-4xl font-bold mb-12">
                            Jaouad Halli
                            <span class="block text-primary-600 mt-2">Ingénieur Développeur</span>
                        </h1>
                        <div class="text-gray-600 dark:text-gray-300 mb-12">
                            <p class="mb-4">
                                Passionné par le développement web et les technologies modernes, avec une expertise en
                                Angular, NestJS, Node.js et architecture cloud.
                            </p>
                            <p class="mb-4">
                                J'apporte des solutions robustes, sécurisées et adaptées aux besoins numériques des
                                entreprises, en exploitant les technologies récentes comme l'intelligence artificielle
                                pour garantir performance, fiabilité et innovation.
                            </p>
                            <p>
                                Mon engagement est d’assurer la réussite des développeurs et de favoriser une
                                collaboration agile, en appliquant les meilleures pratiques de développement.
                            </p>
                        </div>
                        <a routerLink="/about" class="btn-primary">En savoir plus</a>
                    </div>
                    <div class="relative flex justify-center">
                        <div class="flex items-center bg-white justify-center aspect-square rounded-full overflow-hidden shadow-xl w-4/6 h-4/6">
                            <img
                                    src="profile/profile.png"
                                    alt="Jaouad Halli"
                                    class="object-cover"
                            >

                        </div>
                    </div>
                </div>
            </app-section-container>
        </div>
    `
})
export class HomeComponent {
}