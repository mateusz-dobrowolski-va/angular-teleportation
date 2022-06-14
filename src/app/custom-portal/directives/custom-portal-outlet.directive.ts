import {Directive, OnDestroy, ViewContainerRef} from '@angular/core';
import {CustomTeleporterService} from '../custom-teleporter.service';

@Directive({
  selector: '[customTeleportOutlet]',
})
export class CustomPortalOutletDirective implements OnDestroy {
  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly teleportService: CustomTeleporterService
  ) {
    this.teleportService.registerPortalOutlet(this.viewContainerRef);
  }

  ngOnDestroy(): void {
    this.teleportService.unregisterPortalOutlet();
  }
}
