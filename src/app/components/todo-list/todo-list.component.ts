import { Component, Input } from '@angular/core';
import { MyBtnComponent } from "../my-btn/my-btn.component";
import { FormsModule } from '@angular/forms';

interface TodoItemInterface {
  title: string,
  check?: boolean
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MyBtnComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  protected todoList: TodoItemInterface[] = []
  todoInput: string = ''

  addTodoHandler() {
    if (this.todoInput.length != 0) {
      this.todoList?.push({ title: this.todoInput, check: false })
      this.todoInput = ''
      document.getElementById('#todo-input')?.classList.toggle('border-red-300', false)
    } else {
      document.getElementById('#todo-input')?.classList.toggle('border-red-300', true)
    }
    console.log(this.todoList);
  }
  inputChangeHandler(e: Event) {
    console.log(this.todoInput);
  }
}
