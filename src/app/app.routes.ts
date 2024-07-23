import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./common/auth/auth.guard";
import {RoleGuard} from "./common/auth/role.guard";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [] },
  // {
  //   path: 'dashboard',
  //   canActivate: [AuthGuard, RoleGuard],
  //   data: {
  //     roleComponentMap: [
  //       { role: 'admin', component: 'admin-dashboard' },
  //       { role: 'committee', component: 'committee-dashboard' }
  //     ]
  //   },
  //   component: undefined // Placeholder component, actual navigation will be handled by the guard
  // },
  // { path: '/project/:projectId/overview', component: Commit, canActivate: [AuthGuard, RoleGuard], data: { expectedRoles: ['admin', 'committee'] } },
];
