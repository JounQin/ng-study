import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'console',
      },
      {
        path: 'console',
        loadChildren: () =>
          import('./console/console.module').then(m => m.ConsoleModule),
      },
      {
        path: 'landing',
        loadChildren: () =>
          import('./landing/landing.module').then(m => m.LandingModule),
      },
      {
        path: 'connection',
        loadChildren: () =>
          import('./connection/connection.module').then(
            m => m.ConnectionModule,
          ),
      },
      {
        path: 'zone',
        loadChildren: () =>
          import('./zone/zone.module').then(m => m.ZoneModule),
      },
      {
        path: '**',
        redirectTo: 'console',
      },
    ]),
  ],
})
export class AppRoutingModule {}
