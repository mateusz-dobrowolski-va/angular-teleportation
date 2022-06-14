import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {AngularCdkTeleportService} from './angular-cdk-portal/angular-cdk-teleport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  @ViewChild('angularCdkPortalOutlet') set angularCdkPortalOutletElement(elementRef: ElementRef<HTMLElement>) {
    if (elementRef) {
      this.angularCdkTeleportService.registerPortalOutlet(
        elementRef.nativeElement
      );
    }
  }

  constructor(private readonly angularCdkTeleportService: AngularCdkTeleportService) {
  }

  ngOnDestroy(): void {
    this.angularCdkTeleportService.unregisterPortalOutlet();
  }
}
