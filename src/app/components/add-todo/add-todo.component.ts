import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  // Use <any> instead of <Todo> because our variable doesn't match type of <Todo> perfectly, because it doesn't have an id when we add it.
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  // This string becomes whatever user types in the input field.
  title: string;

  constructor() {}

  ngOnInit(): void {}

  // Use the string the user typed to create a new todo component
  onSubmit(): void {
    const newTodo = {
      title: this.title,
      completed: false,
    };

    this.addTodo.emit(newTodo);
  }
}
