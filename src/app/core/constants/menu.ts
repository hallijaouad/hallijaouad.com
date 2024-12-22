import {MenuItem} from '../models/menu.model';

export class Menu {
    public static items: MenuItem[] = [
        {
            index:1,
            label: 'Accueil',
            route: '/home'
        },
        {
            index:2,
            label: 'À propos',
            route: '/about'
        },
        {
            index:3,
            label: 'Contact',
            route: '/contact'
        }
    ]

}
