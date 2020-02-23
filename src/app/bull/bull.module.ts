import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BullPageRoutingModule } from './bull-routing.module';

import { BullPage } from './bull.page';
import { ChartsModule } from 'ng2-charts';
import {BarChartComponent} from './components/bar-chart/bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BullPageRoutingModule,
    ChartsModule,
  ],
  declarations: [
    BullPage,
    BarChartComponent,
  ]
})
export class BullPageModule {}
