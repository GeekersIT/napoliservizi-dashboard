import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { GlobaliComponent } from './globali/globali.component';
import { PerformanceComponent } from './performance/performance.component';
import { PmsComponent } from './pms/pms.component';
import { PuntualiComponent } from './puntuali/puntuali.component';

const routes: Routes = [
  {
    path: 'puntuali',
    component: PuntualiComponent,
    canActivate: [AuthGuard],
    data: { roles: ['pms-gestione-indicatori'] },
  },
  {
    path: 'pms',
    component: PmsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['pms-gestione-indicatori'] },
  },
  {
    path: 'performance',
    component: PerformanceComponent,
    canActivate: [AuthGuard],
    data: { roles: ['pms-gestione-indicatori'] },
  },
  {
    path: 'globali',
    component: GlobaliComponent,
    canActivate: [AuthGuard],
    data: { roles: ['pms-gestione-indicatori'] },
  },
  {
    path: '',
    loadChildren: () =>
      import('../../page404/page404.module').then((m) => m.Page404Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatoriRoutingModule {}
