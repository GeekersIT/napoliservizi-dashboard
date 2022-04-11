import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { LivelliComponent } from './livelli.component';

const routes: Routes = [
  {
    path: '',
    component: LivelliComponent,
    canActivate: [AuthGuard],
    data: { roles: ['gis-gestione-livelli'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivelliRoutingModule {}
