import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {
  counter = 0;

  onButtonClick(): void {
    alert('ngneat content clicked!');
  }

  onIncrementClick(): void {
    this.counter++;
  }
}
