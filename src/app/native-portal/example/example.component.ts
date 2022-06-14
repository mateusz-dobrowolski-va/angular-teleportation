import {AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {NativeTeleportService} from '../native-teleport.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent implements AfterViewInit, OnDestroy {
  counter = 0;

  constructor(private readonly nativeTeleportService: NativeTeleportService) {
  }

  ngAfterViewInit(): void {
    this.nativeTeleportService.teleport('native-content', 'native-portal-outlet');
  }

  ngOnDestroy(): void {
    this.nativeTeleportService.finishTeleportation('native-content', 'native-portal-outlet');
  }

  onButtonClick(): void {
    alert('Native content clicked!');
  }

  onIncrementClick(): void {
    this.counter++;
  }
}
