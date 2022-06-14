import {Directive, OnDestroy, TemplateRef} from '@angular/core';
import {CustomTeleporterService} from '../custom-teleporter.service';

@Directive({
  selector: '[customTeleportTo]',
})
export class CustomTeleportToDirective implements OnDestroy {
  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly teleportService: CustomTeleporterService
  ) {
    this.teleportService.startTeleportation(this.templateRef);
  }

  ngOnDestroy(): void {
    this.teleportService.finishTeleportation();
  }
}
