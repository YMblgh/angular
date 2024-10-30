import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TodoItemInterface } from '../../../shared/models/todo';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatIconModule, MatCheckboxModule, FormsModule, MatButtonModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input({ required: true })
  todoItem: TodoItemInterface = {};

  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onCheck: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  editMode = false;
  editInputValue: string | undefined;

  checkChange(e: MatCheckboxChange) {
    console.log(this.todoItem);
    this.onCheck.emit(this.todoItem);
  }
  deleteTodoHandler(e: Event) {
    // console.log(e.target);
    this.onDelete.emit(this.todoItem.id);
  }
  onEditHandler() {
    this.editMode = true;
    this.editInputValue = this.todoItem.title;
  }
  cancelEditHandler() {
    this.editMode = false;
    this.editInputValue = '';
  }
  editCompleteHandler() {
    console.log(this.editInputValue);
    if (this.editInputValue?.length != 0) {
      this.todoItem.title = this.editInputValue;
      this.editMode = false;
      this.onEdit.emit(this.todoItem);
    }
  }
}
