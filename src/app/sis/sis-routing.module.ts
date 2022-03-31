import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'unita/operative',
    loadChildren: () =>
      import('./unita-operative/unita-operative.module').then(
        (m) => m.UnitaOperativeModule
      ),
  },
  {
    path: 'ris',
    loadChildren: () => import('./ris/ris.module').then((m) => m.RisModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SisRoutingModule {}
