import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesactivarPageRoutingModule } from './desactivar-routing.module';

import { DesactivarPage } from './desactivar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesactivarPageRoutingModule
  ],
  declarations: [DesactivarPage]
})
export class DesactivarPageModule {}
