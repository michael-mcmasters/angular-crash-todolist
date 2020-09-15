import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // (myTodo is assigned in todos.component.html where it says [myTodo]="todo">)
  // Because myTodo is of type Todo.ts. It has properties id, title, completed.
  @Input() myTodo: Todo;

  constructor() {}

  ngOnInit(): void {}

  // Set Dynamic Classes

  // Returns CSS classes for <div> to use.
  setClasses() {
    // Both are classes. But 'is-complete' is a string because Javascript doesn't allow "-" in-between variables.
    let classes = {
      todo: true,
      'is-complete': this.myTodo.completed,
    };

    return classes;
  }

  onToggle(myTodo) {
    console.log('toggle');
    myTodo.completed = !myTodo.completed;
  }

  onDelete(myTodo) {
    console.log('delete');
  }
}
