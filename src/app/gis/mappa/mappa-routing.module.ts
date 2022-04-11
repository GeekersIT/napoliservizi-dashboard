import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { MappaComponent } from './mappa.component';

const routes: Routes = [
  {
    path: '',
    component: MappaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['gis-mappa'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MappaRoutingModule {}
