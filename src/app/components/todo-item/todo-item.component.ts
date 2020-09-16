import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // @Input() when parent component is setting values in this component. ( As seen in todos.component.html: [myTodo]="todo" ).
  // @Output() when this component is setting a value in the parent component. ( As seen in todos.component.html: (deleteTodo)="deleteTodo($event)" ).
  // If you want to display a property inside of this class's html file, you don't need @ anything. Just create the property. and then use {{ myProperty }} in the .html.

  // Because myTodo is of type: Todo. It has the properties id, title, and completed. (Go to Todo.ts to see them.)
  @Input() myTodo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  // Returns CSS classes for <div> to use.
  setClasses() {
    // Both of these are CSS classes. But 'is-complete' is a string because Javascript doesn't allow "-" in-between variables.
    let classes = {
      todo: true,
      'is-complete': this.myTodo.completed,
    };
    return classes;
  }

  onToggle(myTodo) {
    // update on client
    myTodo.completed = !myTodo.completed;

    // update on server
    this.todoService
      .toggleCompleted(myTodo)
      .subscribe((myTodo) => console.log(myTodo));
  }

  onDelete(myTodo) {
    this.deleteTodo.emit(myTodo);
  }
}
