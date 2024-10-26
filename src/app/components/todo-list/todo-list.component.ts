import { Component, Input } from '@angular/core';
import { MyBtnComponent } from '../my-btn/my-btn.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { TodoItemInterface } from '../../shared/models/todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MyBtnComponent,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    TodoItemComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  protected todoList: TodoItemInterface[] = [];
  todoInput: string = '';

  addTodoHandler() {
    if (this.todoInput.length != 0) {
      this.todoList?.push({ id: new Date().getTime() , title: this.todoInput, checked: false });
      this.todoInput = '';
      document
        .getElementById('#todo-input')
        ?.classList.toggle('border-red-300', false);
    } else {
      document
        .getElementById('#todo-input')
        ?.classList.toggle('border-red-300', true);
    }
    console.log(this.todoList);
  }

  onDleteTodoHandler(id: number) {
    console.log(id);
    this.todoList = this.todoList.filter(todo => todo.id != id)
  }
  onCheckTodoHandler(item: TodoItemInterface) {
    console.log(item.checked);
    this.todoList.map(todoItem => {
      if (todoItem.id === item.id) {
        todoItem.checked = item.checked
      }
    })
    console.log(this.todoList);
    
  }
}
