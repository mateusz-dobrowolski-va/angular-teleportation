import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {DomPortal} from '@angular/cdk/portal';
import {AngularCdkTeleportService} from '../angular-cdk-teleport.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements OnDestroy {
  @ViewChild('content') set content(elemRef: ElementRef<HTMLElement>) {
    this.angularCdkTeleportService.teleport(new DomPortal(elemRef));

    // rendering element in different place in the app requires additional change detection cycle
    // setTimeout(() => this.changeDetectorRef.markForCheck());
  };

  counter = 0;

  constructor(private readonly angularCdkTeleportService: AngularCdkTeleportService, private readonly changeDetectorRef: ChangeDetectorRef) {
  }


  ngOnDestroy(): void {
    this.angularCdkTeleportService.finishTeleportation();
  }

  onButtonClick(): void {
    alert('angular/cdk content clicked!');
  }

  onIncrementClick(): void {
    this.counter++;
  }
}
