import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { FormDirtyGuard } from 'src/app/_core/_guards/form-dirty.guard';
import { RisAgentiComponent } from './agenti/agenti.component';
import { RisAgentiEditComponent } from './agenti/edit/edit.component';
import { RisProtocollatiEditComponent } from './protocollati/edit/edit.component';
import { RisProtocollatiComponent } from './protocollati/protocollati.component';
import { RisProtocollatiViewComponent } from './protocollati/view/view.component';
import { RisProvvisoriEditComponent } from './provvisori/edit/edit.component';
import { RisProvvisoriComponent } from './provvisori/provvisori.component';

const routes: Routes = [
  {
    path: 'agenti',
    component: RisAgentiComponent,
    canActivate: [AuthGuard],
    data: { roles: ['sis-agente-accertatore'] },
  },
  {
    path: 'agenti/edit/:id',
    component: RisAgentiEditComponent,
    canActivate: [AuthGuard],
    canDeactivate: [FormDirtyGuard],
    data: { roles: ['sis-agente-accertatore'] },
  },
  {
    path: 'provvisori',
    component: RisProvvisoriComponent,
    canActivate: [AuthGuard],
    data: { roles: ['sis-gestione-incidenti'] },
  },
  {
    path: 'provvisori/edit/:id',
    component: RisProvvisoriEditComponent,
    canActivate: [AuthGuard],
    canDeactivate: [FormDirtyGuard],
    data: { roles: ['sis-gestione-incidenti-edit'] },
  },
  {
    path: 'protocollati',
    component: RisProtocollatiComponent,
    canActivate: [AuthGuard],
    data: { roles: ['sis-gestione-incidenti'] },
  },
  {
    path: 'protocollati/view/:id',
    component: RisProtocollatiViewComponent,
    canActivate: [AuthGuard],
    data: { roles: ['pis-gestione-segnalazioni'] },
  },
  {
    path: 'protocollati/edit/:id',
    component: RisProtocollatiEditComponent,
    canActivate: [AuthGuard],
    canDeactivate: [FormDirtyGuard],
    data: { roles: ['sis-gestione-incidenti-edit'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RisRoutingModule {}
