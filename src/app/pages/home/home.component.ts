import { Component } from '@angular/core';
import { MyBtnComponent } from "../../components/my-btn/my-btn.component";
import { TodoListComponent } from "../../components/todo-list/todo-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyBtnComponent, TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
