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
    ]),
  ],
})
export class AppRoutingModule {}
