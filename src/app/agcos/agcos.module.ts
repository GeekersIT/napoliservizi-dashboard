import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgcosRoutingModule } from './agcos-routing.module';
import { ElencoComponent } from './elenco/elenco.component';
import { TableModule } from '../_core/_components/table/table.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ElencoComponent],
  imports: [
    CommonModule,
    AgcosRoutingModule,
    TableModule,
    MatToolbarModule,
    TranslateModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AgcosModule {}
