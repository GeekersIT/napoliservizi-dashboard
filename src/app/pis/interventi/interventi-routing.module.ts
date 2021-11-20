import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { FormDirtyGuard } from 'src/app/_core/_guards/form-dirty.guard';
import { InterventiCampoComponent } from './campo/campo.component';
import { InterventiCampoEditComponent } from './campo/edit/edit.component';
import { InterventiStraordinariEditComponent } from './straordinari/edit/edit.component';
import { InterventiStraordinariComponent } from './straordinari/straordinari.component';

const routes: Routes = [{
  path: 'straordinari',
  component: InterventiStraordinariComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-interventi'] },
},
{
  path: 'straordinari/edit/:id',
  component: InterventiStraordinariEditComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-interventi-edit'] },
},
{
  path: 'campo',
  component: InterventiCampoComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-interventi'] },
},
{
  path: 'campo/edit/:id',
  component: InterventiCampoEditComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-interventi-edit'] },
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterventiRoutingModule { }
