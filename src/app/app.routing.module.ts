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
        loadChildren: './console/console.module#ConsoleModule',
      },
      {
        path: 'landing',
        loadChildren: './landing/landing.module#LandingModule',
      },
      {
        path: 'connection',
        loadChildren: './connection/connection.module#ConnectionModule',
      },
      {
        path: 'zone',
        loadChildren: './zone/zone.module#ZoneModule',
      },
      {
        path: '**',
        redirectTo: 'console',
      },
    ]),
  ],
})
export class AppRoutingModule {}
