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
import { MatMenuModule } from '@angular/material/menu';
import { DiarioDiBordoComponent } from './protocollate/diario-di-bordo/diario-di-bordo.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from 'ngx-avatar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { SegnalazioniProtocollateAssegnaComponent } from './protocollate/assegna/assegna.component';
import { SegnalazioniProtocollateSospendiComponent } from './protocollate/sospendi/sospendi.component';
import { SegnalazioniProtocollateRimandaComponent } from './protocollate/rimanda/rimanda.component';
import { SegnalazioniProtocollateCompletaComponent } from './protocollate/completa/completa.component';
import { SegnalazioniProtocollateViewComponent } from './protocollate/view/view.component';
import { RisoluzioneMultiplaDialogComponent } from './protocollate/risoluzione-multipla-dialog/risoluzione-multipla-dialog.component';
import { FormlyModule } from '@ngx-formly/core';
import { AutocompleteFormlyModule } from 'src/app/_core/_formly/_components/autocomplete-formly/autocomplete-formly.module';
import { SegnalazioniProtocollateCompletaEditComponent } from './protocollate/completa/edit/edit.component';

@NgModule({
  declarations: [
    SegnalazioniPreComponent,
    SegnalazioniProvvisorieComponent,
    SegnalazioniProtocollateComponent,
    SegnalazioniPreEditComponent,
    SegnalazioniProvvisorieEditComponent,
    SegnalazioniProtocollateViewComponent,
    SegnalazioniProtocollateCompletaEditComponent,
    SegnalazioniProtocollateEditComponent,
    SegnalazioniProtocollateAssegnaComponent,
    SegnalazioniProtocollateSospendiComponent,
    SegnalazioniProtocollateRimandaComponent,
    SegnalazioniProtocollateCompletaComponent,
    DiarioDiBordoComponent,
    RisoluzioneMultiplaDialogComponent,
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
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    AvatarModule,
    NgScrollbarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    FileUploadModule,
    FormlyModule.forChild(),
    AutocompleteFormlyModule,


  ]
})
export class SegnalazioniModule { }
