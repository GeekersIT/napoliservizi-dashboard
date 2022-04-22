import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

const routes: Routes = [
  {
    path: 'mappa',
    canActivate: [AuthGuard],
    data: { roles: ['gis-mappa'] },
    loadChildren: () =>
      import('./mappa/mappa.module').then((m) => m.MappaModule),
  },
  {
    path: 'livelli',
    canActivate: [AuthGuard],
    data: { roles: ['gis-gestione-livelli'] },
    loadChildren: () =>
      import('./livelli/livelli.module').then((m) => m.LivelliModule),
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
export class GisRoutingModule {}
