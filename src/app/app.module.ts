import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { UpgradeModule } from '@angular/upgrade/static'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'

@NgModule({
  imports: [BrowserModule, RouterModule, UpgradeModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
