import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquadreRoutingModule } from './squadre-routing.module';
import { SquadreComponent } from './squadre.component';
import { SquadraEditComponent } from './edit/edit.component';
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
import { OperatoreComponent } from './operatore/operatore.component';
import { OperatoreEditComponent } from './operatore/edit/edit.component';


@NgModule({
  declarations: [
    SquadreComponent,
    SquadraEditComponent,
    OperatoreComponent,
    OperatoreEditComponent
  ],
  imports: [
    CommonModule,
    SquadreRoutingModule,
    TableModule,
    MatToolbarModule,
    TranslateModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    FormModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class SquadreModule { }
