import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivelliRoutingModule } from './livelli-routing.module';
import { LivelliComponent } from './livelli.component';


@NgModule({
  declarations: [
    LivelliComponent
  ],
  imports: [
    CommonModule,
    LivelliRoutingModule
  ]
})
export class LivelliModule { }
