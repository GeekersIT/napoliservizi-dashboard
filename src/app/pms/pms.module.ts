import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmsRoutingModule } from './pms-routing.module';
import { PacchettoComponent } from './pacchetto/pacchetto.component';
import { EditComponent as PacchettoEditComponent } from './pacchetto/edit/edit.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from '../_core/_components/table/table.module';
import { FormModule } from '../_core/_components/form/form.module';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PacchettoComponent, PacchettoEditComponent],
  imports: [
    CommonModule,
    PmsRoutingModule,
    MatToolbarModule,
    TranslateModule,
    MatIconModule,
    TableModule,
    FormModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
})
export class PmsModule {}
