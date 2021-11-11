import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegnalazioniRoutingModule } from './segnalazioni-routing.module';
import { SegnalazioniPreComponent } from './pre/pre.component';
import { SegnalazioniProvvisorieComponent } from './provvisorie/provvisorie.component';
import { SegnalazioniProtocollateComponent } from './protocollate/protocollate.component';

import { TableModule } from 'src/app/_core/_components/table/table.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormModule } from 'src/app/_core/_components/form/form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SegnalazioniPreEditComponent } from './pre/edit/edit.component';
import { SegnalazioniProvvisorieEditComponent } from './provvisorie/edit/edit.component';
import { SegnalazioniProtocollateEditComponent } from './protocollate/edit/edit.component';

@NgModule({
  declarations: [
    SegnalazioniPreComponent,
    SegnalazioniProvvisorieComponent,
    SegnalazioniProtocollateComponent,
    SegnalazioniPreEditComponent,
    SegnalazioniProvvisorieEditComponent,
    SegnalazioniProtocollateEditComponent,
  ],
  imports: [
    CommonModule,
    SegnalazioniRoutingModule,
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
export class SegnalazioniModule { }
