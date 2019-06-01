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
        path: 'if',
        loadChildren: () => import('./if/if.module').then(m => m.IfModule),
      },
      {
        path: 'outlet',
        loadChildren: () =>
          import('./outlet/outlet.module').then(m => m.OutletModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then(m => m.UserModule),
      },
      {
        path: 'for',
        loadChildren: () => import('./for/for.module').then(m => m.ForModule),
      },
      {
        path: '**',
        redirectTo: 'console',
      },
    ]),
  ],
})
export class AppRoutingModule {}
