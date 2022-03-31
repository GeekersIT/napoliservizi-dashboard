import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RisRoutingModule } from './ris-routing.module';
import { RisProvvisoriComponent } from './provvisori/provvisori.component';
import { RisProtocollatiComponent } from './protocollati/protocollati.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { FormlyModule } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormModule } from 'src/app/_core/_components/form/form.module';
import { TableModule } from 'src/app/_core/_components/table/table.module';
import { AutocompleteFormlyModule } from 'src/app/_core/_formly/_components/autocomplete-formly/autocomplete-formly.module';
import { RisProvvisoriEditComponent } from './provvisori/edit/edit.component';
import { RisProtocollatiEditComponent } from './protocollati/edit/edit.component';
import { RisProtocollatiViewComponent } from './protocollati/view/view.component';
import { RisAgentiComponent } from './agenti/agenti.component';
import { RisAgentiEditComponent } from './agenti/edit/edit.component';
import {
  AccertatoriComponent,
  AddDialog,
} from './agenti/edit/accertatori/accertatori.component';

@NgModule({
  declarations: [
    RisAgentiComponent,
    RisProvvisoriComponent,
    RisProtocollatiComponent,
    RisProvvisoriEditComponent,
    RisAgentiEditComponent,
    RisProtocollatiEditComponent,
    RisProtocollatiViewComponent,
    AccertatoriComponent,
    AddDialog,
  ],
  imports: [
    CommonModule,
    RisRoutingModule,
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
  ],
})
export class RisModule {}
