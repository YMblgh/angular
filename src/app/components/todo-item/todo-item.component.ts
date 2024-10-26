import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TodoItemInterface } from '../../shared/models/todo';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatIconModule, MatCheckboxModule, FormsModule, MatButtonModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input({ required: true })
  todoItem: TodoItemInterface = { id: -1 , title: '', checked: false };

  @Output() onDelete: EventEmitter<any> = new EventEmitter()
  @Output() onCheck: EventEmitter<any> = new EventEmitter()
  @Output() onEdit: EventEmitter<any> = new EventEmitter()

  title: string = this.todoItem.title;
  checked: boolean = this.todoItem.checked;

  editMode = false
  
  editInputValue = this.todoItem.title

  checkChange(e: MatCheckboxChange) {
    // console.log(this.checked);
    this.onCheck.emit({ checked: this.checked, id: this.todoItem.id, title: this.title })
  }
  deleteTodoHandler(e: Event) {
    // console.log(e.target);
    this.onDelete.emit(this.todoItem.id)
  }
  onEditHandler() {
    this.editMode = true
  }
  cancelEditHandler() {
    this.editMode = false
  }
  editCompleteHandler() {
    console.log(this.editInputValue);
    if (this.editInputValue.length != 0) {
      this.todoItem.title = this.editInputValue
      this.editMode = false
    }
    
  }
}
