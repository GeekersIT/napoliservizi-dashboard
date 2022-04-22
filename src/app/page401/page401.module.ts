import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page401RoutingModule } from './page401-routing.module';
import { Page401Component } from './page401.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Page401Component],
  imports: [
    CommonModule,
    Page401RoutingModule,
    MatCardModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class Page401Module {}
