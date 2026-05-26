import { Routes } from '@angular/router';
import { MainDev } from './components/main-dev/main-dev';
import { FormCreation } from './components/form-creation/form-creation';
import { Consultation } from './components/consultation/consultation';

export const routes: Routes = [
    {
        // HOME PAGE WITH ALL TABLE
        path: '',
        component: MainDev,
        title: 'Accueil'
    },
    {
        // NEW TICKET PAGE
        path: 'forms',
        component: FormCreation,
        title: 'Soumission'
    },
    {
        // UPDATE TICKET PAGE
        path: 'consult',
        component: Consultation,
        title: 'Consultation'
    }
];
