import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  exports: [CommonModule, RouterModule],
})
export class SharedModule {}
