import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'native',
    loadChildren: () => import('./native-portal/native-portal.module').then(m => m.NativePortalModule),
  },
  {
    path: 'angular-cdk',
    loadChildren: () => import('./angular-cdk-portal/angular-cdk-portal.module').then(m => m.AngularCdkPortalModule),
  },
  {
    path: 'ngneat',
    loadChildren: () => import('./ngneat-portal/ngneat-portal.module').then(m => m.NgneatPortalModule),
  },
  {
    path: 'custom',
    loadChildren: () => import('./custom-portal/custom-portal.module').then(m => m.CustomPortalModule),
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
