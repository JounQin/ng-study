import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/routes'),
  },
  {
    path: 'question',
    loadComponent: () => import('./question/question.component'),
  },
  {
    path: 'signal',
    loadComponent: () => import('./signal/signal.component'),
  }
];
