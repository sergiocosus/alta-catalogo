import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BullPageRoutingModule } from './bull-routing.module';

import { BullPage } from './bull.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BullPageRoutingModule
  ],
  declarations: [BullPage]
})
export class BullPageModule {}
