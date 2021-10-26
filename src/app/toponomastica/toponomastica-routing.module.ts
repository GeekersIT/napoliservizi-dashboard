import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';
import { MunicipalitaEditComponent } from './municipalita/edit/edit.component';
import { MunicipalitaComponent } from './municipalita/municipalita.component';
import { QuartieriEditComponent } from './quartieri/edit/edit.component';
import { QuartieriComponent } from './quartieri/quartieri.component';
import { ToponimiEditComponent } from './toponimi/edit/edit.component';
import { ToponimiComponent } from './toponimi/toponimi.component';

const routes: Routes = [{
  path: 'municipalita',
  component: MunicipalitaComponent,
  canActivate: [AuthGuard],
  data: { roles: ['toponomastica-gestione-municipalita'] },
},{
  path: 'municipalita/edit/:id',
  component: MunicipalitaEditComponent,
  canActivate: [AuthGuard],
  data: { roles: ['toponomastica-gestione-municipalita-edit'] },
},{
  path: 'quartieri',
  component: QuartieriComponent,
  canActivate: [AuthGuard],
  data: { roles: ['toponomastica-gestione-quartieri'] }
},{
  path: 'quartieri/edit/:id',
  component: QuartieriEditComponent,
  canActivate: [AuthGuard],
  data: { roles: ['toponomastica-gestione-quartieri-edit'] },
},{
  path: 'toponimi',
  component: ToponimiComponent,
  canActivate: [AuthGuard],
  data: { roles: ['toponomastica-gestione-toponimi'] }
},{
  path: 'toponimi/edit/:id',
  component: ToponimiEditComponent,
  canActivate: [AuthGuard],
  data: { roles: ['toponomastica-gestione-toponimi-edit'] },
},{
  path:'',
  loadChildren: () => import('../page404/page404.module').then(m => m.Page404Module),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToponomasticaRoutingModule { }
