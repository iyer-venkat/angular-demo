import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  count: number = 0;
  CopyText: string = 'Venkat';

  public Increment = () => {
    this.count += 1;
  };

  public Decrement = () => {
    this.count -= 1;
  };
}
