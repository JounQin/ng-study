import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import './legacy/app.entry'

// angular should be included first
// tslint:disable-next-line:ordered-imports
import { setUpLocationSync } from '@angular/router/upgrade'
import { UpgradeModule } from '@angular/upgrade/static'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(({ injector }) => {
    const upgrade = injector.get(UpgradeModule)
    upgrade.bootstrap(document.body, ['app'], {
      strictDi: true,
    })
    setUpLocationSync(upgrade)
  })
  .catch(console.error)
