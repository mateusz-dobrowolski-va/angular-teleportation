import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleComponent} from './example/example.component';
import {RouterModule} from '@angular/router';
import {PortalModule} from '@angular/cdk/portal';


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ExampleComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]),
    PortalModule
  ]
})
export class AngularCdkPortalModule {
}
