import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappaRoutingModule } from './mappa-routing.module';
import { MappaComponent } from './mappa.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoComponent } from './info/info.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [MappaComponent, InfoComponent],
  imports: [
    CommonModule,
    MappaRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    TranslateModule,
    MatDialogModule,
    MatExpansionModule,
  ],
})
export class MappaModule {}
