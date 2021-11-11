import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { SegnalazioniPreEditComponent } from './pre/edit/edit.component';
import { SegnalazioniPreComponent } from './pre/pre.component';
import { SegnalazioniProtocollateEditComponent } from './protocollate/edit/edit.component';
import { SegnalazioniProtocollateComponent } from './protocollate/protocollate.component';
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
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
},
{
  path: 'protocollate',
  component: SegnalazioniProtocollateComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-segnalazioni'] },
},
{
  path: 'protocollate/edit/:id',
  component: SegnalazioniProtocollateEditComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-segnalazioni-edit'] },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegnalazioniRoutingModule { }
