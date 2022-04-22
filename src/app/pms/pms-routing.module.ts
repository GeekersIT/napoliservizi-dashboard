import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';
import { PacchettoComponent } from './pacchetto/pacchetto.component';

const routes: Routes = [
  {
    path: 'pacchetto/stradale',
    component: PacchettoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['pms-pacchetto-stradale'] },
  },
  {
    path: 'indicatori',
    canActivate: [AuthGuard],
    data: { roles: ['pms-gestione-indicatori'] },
    loadChildren: () =>
      import('./indicatori/indicatori.module').then((m) => m.IndicatoriModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../page404/page404.module').then((m) => m.Page404Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmsRoutingModule {}
