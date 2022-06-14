import {Injectable, TemplateRef, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomTeleporterService {
  private portalOutlet: ViewContainerRef | null = null;

  registerPortalOutlet(viewContainerRef: ViewContainerRef): void {
    this.portalOutlet = viewContainerRef;
  }

  unregisterPortalOutlet(): void {
    this.portalOutlet = null;
  }

  startTeleportation(templateRef: TemplateRef<unknown>): void {
    this.portalOutlet?.createEmbeddedView(templateRef);
  }

  finishTeleportation(): void {
    this.portalOutlet?.clear();
  }
}
