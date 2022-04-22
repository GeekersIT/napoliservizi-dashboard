import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicatoriRoutingModule } from './indicatori-routing.module';
import { PuntualiComponent } from './puntuali/puntuali.component';
import { GlobaliComponent } from './globali/globali.component';
import { PmsComponent } from './pms/pms.component';
import { PerformanceComponent } from './performance/performance.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { FormModule } from 'src/app/_core/_components/form/form.module';
import { TableModule } from 'src/app/_core/_components/table/table.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent as PmsEditComponent } from './pms/edit/edit.component';
import { EditComponent as PuntualiEditComponent } from './puntuali/edit/edit.component';
import { EditComponent as PerformanceEditComponent } from './performance/edit/edit.component';
import { EditComponent as GlobaliEditComponent } from './globali/edit/edit.component';
import { PipesModule } from 'src/app/_core/_pipes/pipes.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    PuntualiComponent,
    GlobaliComponent,
    PmsComponent,
    PerformanceComponent,
    PmsEditComponent,
    PuntualiEditComponent,
    PerformanceEditComponent,
    GlobaliEditComponent,
  ],
  imports: [
    CommonModule,
    IndicatoriRoutingModule,
    FormModule,
    TranslateModule,
    MatButtonModule,
    TableModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    FormModule,
    PipesModule,
    MatSnackBarModule,
  ],
})
export class IndicatoriModule {}
