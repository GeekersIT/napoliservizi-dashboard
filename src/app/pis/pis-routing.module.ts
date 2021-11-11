import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'squadre',
  loadChildren: () => import('./squadre/squadre.module').then(m => m.SquadreModule),
},{
  path: 'interventi',
  loadChildren: () => import('./interventi/interventi.module').then(m => m.InterventiModule),
},{
  path: 'segnalazioni',
  loadChildren: () => import('./segnalazioni/segnalazioni.module').then(m => m.SegnalazioniModule),
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PisRoutingModule { }
