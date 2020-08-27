import { NgModule } from '@angular/core';
import { BlueModule } from '@packages/blue';
import { RedModule } from '@packages/red';

import { ColorsComponent } from './colors.component';

@NgModule({
  declarations: [ColorsComponent],
  imports: [
    BlueModule,
    RedModule
  ],
  exports: [ColorsComponent]
})
export class ColorsModule { }
