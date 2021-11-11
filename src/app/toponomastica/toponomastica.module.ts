import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToponomasticaRoutingModule } from './toponomastica-routing.module';
import { MunicipalitaComponent } from './municipalita/municipalita.component';
import { QuartieriComponent } from './quartieri/quartieri.component';
import { ToponimiComponent } from './toponimi/toponimi.component';
import { TableModule } from '../_core/_components/table/table.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MunicipalitaEditComponent } from './municipalita/edit/edit.component';
import { QuartieriEditComponent } from './quartieri/edit/edit.component';
import { ToponimiEditComponent } from './toponimi/edit/edit.component';
import { FormModule } from '../_core/_components/form/form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    MunicipalitaComponent,
    QuartieriComponent,
    ToponimiComponent,
    MunicipalitaEditComponent,
    QuartieriEditComponent,
    ToponimiEditComponent
  ],
  imports: [
    CommonModule,
    ToponomasticaRoutingModule,
    TableModule,
    MatToolbarModule,
    TranslateModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    FormModule,
    MatDialogModule,
    MatSnackBarModule,
  ]
})
export class ToponomasticaModule { }
