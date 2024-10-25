import { Component, Input } from '@angular/core';
import { MyBtnComponent } from "../my-btn/my-btn.component";

interface TodoItemInterface {
  title: string,
  check?: boolean
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MyBtnComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  protected todoList: TodoItemInterface[] = []
  todoInput: string = ''
  @Input() ngModel = ''

  addTodoHandler(e: MouseEvent) {
    this.todoList?.push({ title: 'hi', check: false })
    console.log(this.todoList);
    
  }
  inputChangeHandler(e: Event) {
    console.log(e);
    
  }
}
