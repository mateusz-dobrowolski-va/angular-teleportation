import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import {RouterModule} from '@angular/router';



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
    ])
  ]
})
export class NativePortalModule { }
