import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_core/_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'toponomastica',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./toponomastica/toponomastica.module').then(
        (m) => m.ToponomasticaModule
      ),
  },
  {
    path: 'pis',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pis/pis.module').then((m) => m.PisModule),
  },
  {
    path: 'sis',
    canActivate: [AuthGuard],
    loadChildren: () => import('./sis/sis.module').then((m) => m.SisModule),
  },
  {
    path: 'agcos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./agcos/agcos.module').then((m) => m.AgcosModule),
  },
  {
    path: 'pms',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pms/pms.module').then((m) => m.PmsModule),
  },
  {
    path: 'gis',
    canActivate: [AuthGuard],
    loadChildren: () => import('./gis/gis.module').then((m) => m.GisModule),
  },
  {
    path: '401',
    loadChildren: () =>
      import('./page401/page401.module').then((m) => m.Page401Module),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page404/page404.module').then((m) => m.Page404Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
