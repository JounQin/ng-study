import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'
import { CoreModule } from './core/core.module'

@NgModule({
  imports: [BrowserModule, RouterModule, CoreModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
