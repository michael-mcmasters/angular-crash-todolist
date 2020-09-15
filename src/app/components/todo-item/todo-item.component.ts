import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // myTodo is assigned in todos.component.html where it says [myTodo]="todo">
  @Input() myTodo: Todo;

  constructor() {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.myTodo.completed,
    };

    return classes;
  }
}
