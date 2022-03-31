import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappaRoutingModule } from './mappa-routing.module';
import { MappaComponent } from './mappa.component';


@NgModule({
  declarations: [
    MappaComponent
  ],
  imports: [
    CommonModule,
    MappaRoutingModule
  ]
})
export class MappaModule { }
