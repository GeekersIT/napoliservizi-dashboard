import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

const routes: Routes = [
  {
    path: 'unita/operative',
    canActivate: [AuthGuard],
    data: { roles: ['sis-gestione-unita-operative'] },
    loadChildren: () =>
      import('./unita-operative/unita-operative.module').then(
        (m) => m.UnitaOperativeModule
      ),
  },
  {
    path: 'ris',
    canActivate: [AuthGuard],
    data: { roles: ['sis-gestione-incidenti'] },
    loadChildren: () => import('./ris/ris.module').then((m) => m.RisModule),
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
export class SisRoutingModule {}
