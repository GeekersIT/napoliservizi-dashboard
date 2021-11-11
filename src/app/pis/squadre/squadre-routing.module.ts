import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { SquadraEditComponent } from './edit/edit.component';
import { OperatoreEditComponent } from './operatore/edit/edit.component';
import { OperatoreComponent } from './operatore/operatore.component';
import { SquadreComponent } from './squadre.component';

const routes: Routes = [{
  path: '',
  component: SquadreComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-squadre'] },
},{
  path: 'edit/:id',
  component: SquadraEditComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-squadre-edit'] },
},{
  path: 'operatore',
  component: OperatoreComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-squadre'] },
},{
  path: 'operatore/edit/:id',
  component: OperatoreEditComponent,
  canActivate: [AuthGuard],
  data: { roles: ['pis-gestione-squadre-edit'] },
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SquadreRoutingModule { }
