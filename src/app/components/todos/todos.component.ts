import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // Todo is a type we made, like string or number.
  todos: Todo[];

  constructor() {
    // an array of objects
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: true,
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true,
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false,
      },
    ];
  }

  ngOnInit(): void {}
}
