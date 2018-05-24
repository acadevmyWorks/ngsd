import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

import { AuthGuard } from './../auth/auth.guard';

const routes: Routes = [
  { path: 'system', component: SystemComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
