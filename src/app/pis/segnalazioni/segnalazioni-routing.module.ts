import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { FormDirtyGuard } from 'src/app/_core/_guards/form-dirty.guard';
import { SegnalazioniPreEditComponent } from './pre/edit/edit.component';
import { SegnalazioniPreComponent } from './pre/pre.component';
import { SegnalazioniProtocollateAssegnaComponent } from './protocollate/assegna/assegna.component';
import { SegnalazioniProtocollateCompletaComponent } from './protocollate/completa/completa.component';
import { SegnalazioniProtocollateCompletaEditComponent } from './protocollate/completa/edit/edit.component';
import { DiarioDiBordoComponent } from './protocollate/diario-di-bordo/diario-di-bordo.component';
import { SegnalazioniProtocollateEditComponent } from './protocollate/edit/edit.component';
import { SegnalazioniProtocollateComponent } from './protocollate/protocollate.component';
import { SegnalazioniProtocollateRimandaComponent } from './protocollate/rimanda/rimanda.component';
import { SegnalazioniProtocollateSospendiComponent } from './protocollate/sospendi/sospendi.component';
import { SegnalazioniProtocollateViewComponent } from './protocollate/view/view.component';
import { SegnalazioniProvvisorieEditComponent } from './provvisorie/edit/edit.component';
import { SegnalazioniProvvisorieComponent } from './provvisorie/provvisorie.component';

const routes: Routes = [{
  path: 'pre',
  component: SegnalazioniPreComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-segnalazioni'] },
},
{
  path: 'pre/edit/:id',
  component: SegnalazioniPreEditComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'provvisorie',
  component: SegnalazioniProvvisorieComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-segnalazioni'] },
},
{
  path: 'provvisorie/edit/:id',
  component: SegnalazioniProvvisorieEditComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'protocollate',
  component: SegnalazioniProtocollateComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-segnalazioni'] },
},
{
  path: 'protocollate/view/:id',
  component: SegnalazioniProtocollateViewComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-segnalazioni'] },
},
{
  path: 'protocollate/edit/:id',
  component: SegnalazioniProtocollateEditComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'protocollate/completa/edit/:id',
  component: SegnalazioniProtocollateCompletaEditComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'protocollate/assegna/:id',
  component: SegnalazioniProtocollateAssegnaComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'protocollate/rimanda/:id',
  component: SegnalazioniProtocollateRimandaComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'protocollate/sospendi/:id',
  component: SegnalazioniProtocollateSospendiComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'protocollate/completa/:id',
  component: SegnalazioniProtocollateCompletaComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDirtyGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'protocollate/diario/:id',
  component: DiarioDiBordoComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-diario-di-bordo'] },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegnalazioniRoutingModule { }
