import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleComponent} from './example/example.component';
import {RouterModule} from '@angular/router';
import {CustomPortalOutletDirective} from './directives/custom-portal-outlet.directive';
import {CustomTeleportToDirective} from './directives/custom-teleport-to.directive';


@NgModule({
  declarations: [
    ExampleComponent,
    CustomPortalOutletDirective,
    CustomTeleportToDirective
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
    ])
  ],
  exports: [
    CustomPortalOutletDirective,
    CustomTeleportToDirective
  ]
})
export class CustomPortalModule {
}
