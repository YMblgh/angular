import { Component, Input } from '@angular/core';
import { ChangeColorDirective } from '../../directives/change-color.directive';

@Component({
  selector: 'app-my-btn',
  standalone: true,
  imports: [ChangeColorDirective],
  templateUrl: './my-btn.component.html',
  // styleUrl: './my-btn.component.scss'
})
export class MyBtnComponent {
  @Input({ required: true }) text = ''
}
