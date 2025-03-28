import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ServerErrorComponent } from './server-error/server-error.component';

const routes: Routes = [
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: 'access-denied', component: AccessDeniedComponent
  },
  {
    path: 'server-error', component: ServerErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
