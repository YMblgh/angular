import {
  Component,
  effect,
  inject,
  Inject,
  Input,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { MyBtnComponent } from '../../my-btn/my-btn.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { TodoItemInterface } from '../../../shared/models/todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';

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
  providers: [TodoService],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  private todoService: TodoService = inject(TodoService);

  todos = signal<TodoItemInterface[]>([]);

  protected todoList: TodoItemInterface[] = [];
  todoInput: string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.todoService.getTodos().subscribe({
      next: (res: any) => this.todos.set(res),
      error: (res: any) => console.log(res),
    });
  }

  todoEffect = effect(() => {
    console.log(this.todos());
    this.todoList = this.todos();
  });

  addTodoHandler() {
    if (this.todoInput.length != 0) {
      const newTodo = {
        title: this.todoInput,
        createdAt: new Date(),
      };
      this.todoService.createTodo(newTodo).subscribe({
        next: (res: any) => {
          console.log('todo create success!', res);

          this.todoList.push(res);
          console.log(this.todoList);
        },
      });
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
    this.todoService.deleteTodo(id).subscribe({
      next: (res) => {
        console.log('delete success!', res);
        this.todoList = this.todoList.filter((todo) => todo.id != id);
      },
    });
  }
  onCheckTodoHandler(todo: TodoItemInterface) {
    console.log(todo);

    this.todoService.editTodo({ ...todo, isDone: todo.isDone }).subscribe({
      next: (res) => console.log('edit success!', res),
    });
  }
  onEditTodoHandler(todo: TodoItemInterface) {
    this.todoService.editTodo(todo);
  }
}
