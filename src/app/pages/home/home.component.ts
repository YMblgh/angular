import { Component } from '@angular/core';
import { MyBtnComponent } from "../../components/my-btn/my-btn.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyBtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
