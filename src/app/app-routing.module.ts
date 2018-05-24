import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
   { path: '', loadChildren: './dashboard/dashboard.module#AppDashboardModule', canActivate: [AuthGuard] },
   { path: 'system', loadChildren: './system/system.module#AppSystemModule', canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}

