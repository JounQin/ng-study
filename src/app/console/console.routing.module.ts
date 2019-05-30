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
            loadChildren: () =>
              import('./home/home.module').then(m => m.HomeModule),
          },
          {
            path: '**',
            loadChildren: () =>
              import('./downgrade/downgrade.module').then(
                m => m.DowngradeModule,
              ),
          },
        ],
      },
    ]),
  ],
})
export class ConsoleRoutingModule {}
