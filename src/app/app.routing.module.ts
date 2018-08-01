import { Location } from '@angular/common'
import { Injectable, NgModule } from '@angular/core'
import {
  Router,
  RouterModule,
  UrlHandlingStrategy,
  UrlSerializer,
  UrlTree,
} from '@angular/router'

@Injectable()
export class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  constructor(
    private location: Location,
    private urlSerializer: UrlSerializer,
  ) {}

  shouldProcessUrl(url: UrlTree): boolean {
    // tslint:disable-next-line no-use-before-declare
    return !AppRoutingModule.isUrlLegacy(this.extract(url).toString())
  }

  extract(url: UrlTree): UrlTree {
    return this.urlSerializer.parse(this.location.normalize(url.toString()))
  }

  merge(url: UrlTree): UrlTree {
    return url
  }
}

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
  providers: [
    {
      provide: UrlHandlingStrategy,
      useClass: HybridUrlHandlingStrategy,
    },
  ],
})
export class AppRoutingModule {
  private static routes: string[] = []

  static isUrlLegacy(url: string) {
    return !this.routes.includes(url.split('/')[1])
  }

  constructor(private router: Router) {
    this.router.config.forEach(route => {
      AppRoutingModule.routes.push(route.path.split('/')[0])
    })
  }
}
