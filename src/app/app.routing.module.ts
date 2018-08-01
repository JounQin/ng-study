import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
