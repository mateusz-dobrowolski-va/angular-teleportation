import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PortalModule as AngularCdkPortalModule} from '@angular/cdk/portal';
import {TeleportModule as NgneatTeleportModule} from '@ngneat/overview';
import {CustomPortalModule} from './custom-portal/custom-portal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCdkPortalModule,
    NgneatTeleportModule,
    CustomPortalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
