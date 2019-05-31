import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'
import { CoreModule } from './core/core.module'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
