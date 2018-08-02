import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ConsoleComponent } from './console.component'

@Component({
  template: '',
})
export class EmptyComponent {}

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
            component: EmptyComponent,
          },
        ],
      },
    ]),
  ],
  declarations: [EmptyComponent],
})
export class ConsoleRoutingModule {}
