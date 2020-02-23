import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BullPage } from './bull.page';

const routes: Routes = [
  {
    path: ':bullId',
    component: BullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BullPageRoutingModule {}
