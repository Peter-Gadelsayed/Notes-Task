import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';


@NgModule({
  declarations: [
    NavBarComponent,
    AccessDeniedComponent,
    NotFoundComponent,
    ServerErrorComponent,
    SessionExpiredComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [NavBarComponent]

})
export class CoreModule { }
