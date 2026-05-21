import { Routes } from '@angular/router';
import { MainDev } from './components/main-dev/main-dev';
import { FormCreation } from './components/form-creation/form-creation';

export const routes: Routes = [
    {
        path: '',
        component: MainDev,
        title: 'Accueil'
    },
    {
        path: 'forms',
        component: FormCreation,
        title: 'Soumission'
    }
];
