import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page404RoutingModule } from './page404-routing.module';
import { Page404Component } from './page404.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Page404Component],
  imports: [
    CommonModule,
    Page404RoutingModule,
    MatCardModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class Page404Module {}
