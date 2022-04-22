import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

const routes: Routes = [
  {
    path: 'squadre',
    canActivate: [AuthGuard],
    data: { roles: ['pis-gestione-squadre'] },
    loadChildren: () =>
      import('./squadre/squadre.module').then((m) => m.SquadreModule),
  },
  {
    path: 'interventi',
    canActivate: [AuthGuard],
    data: { roles: ['pis-gestione-interventi'] },
    loadChildren: () =>
      import('./interventi/interventi.module').then((m) => m.InterventiModule),
  },
  {
    path: 'segnalazioni',
    canActivate: [AuthGuard],
    data: { roles: ['pis-gestione-segnalazioni'] },
    loadChildren: () =>
      import('./segnalazioni/segnalazioni.module').then(
        (m) => m.SegnalazioniModule
      ),
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
export class PisRoutingModule {}
