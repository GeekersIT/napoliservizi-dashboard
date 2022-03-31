import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { UnitaOperativeEditComponent } from './edit/edit.component';
import { UnitaOperativeComponent } from './unita-operative.component';

const routes: Routes = [
  {
    path: '',
    component: UnitaOperativeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['sis-gestione-unita-operative'] },
  },
  {
    path: 'edit/:id',
    component: UnitaOperativeEditComponent,
    canActivate: [AuthGuard],
    data: { roles: ['sis-gestione-unita-operative-edit'] },
  },
  // {
  //   path: 'operatore',
  //   component: OperatoreComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: ['pis-gestione-squadre'] },
  // },{
  //   path: 'operatore/edit/:id',
  //   component: OperatoreEditComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: ['pis-gestione-squadre-edit'] },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitaOperativeRoutingModule {}
