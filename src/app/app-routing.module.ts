import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_core/_guards/auth.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AuthGuard],
  data: { roles: ['admin'] }
},{
  path: 'toponomastica',
  loadChildren: () => import('./toponomastica/toponomastica.module').then(m => m.ToponomasticaModule),
},{
  path: '401',
  loadChildren: () => import('./page401/page401.module').then(m => m.Page401Module)
},
{
  path: '**',
  loadChildren: () => import('./page404/page404.module').then(m => m.Page404Module),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
