import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mappa',
    loadChildren: () =>
      import('./mappa/mappa.module').then((m) => m.MappaModule),
  },
  {
    path: 'livelli',
    loadChildren: () =>
      import('./livelli/livelli.module').then((m) => m.LivelliModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GisRoutingModule {}
