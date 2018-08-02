import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ConsoleComponent } from './console.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ConsoleComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: './home/home.module#HomeModule',
          },
          {
            path: '**',
            loadChildren: './downgrade/downgrade.module#DowngradeModule',
          },
        ],
      },
    ]),
  ],
})
export class ConsoleRoutingModule {}
