import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';
import { ElencoComponent } from './elenco/elenco.component';

const routes: Routes = [
  {
    path: '',
    component: ElencoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['agcos-report'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgcosRoutingModule {}
