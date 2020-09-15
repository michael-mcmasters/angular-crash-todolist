import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // @Input lets us know that this variable is assigned in the parent component's html file.
  // So in todos.component.html it is assigned where it says [myTodo]="todo">.
  // Because myTodo is of type: Todo.ts. It has properties id, title, completed.
  @Input() myTodo: Todo;

  constructor(private todoService: TodoService) {}

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
    // Toggle in UI
    myTodo.completed = !myTodo.completed;
    // Toggle on server
    // this.todoService.toggleCompleted(myTodo).subscribe(myTodo =>
    //   console.log(myTodo);

    this.todoService
      .toggleCompleted(myTodo)
      .subscribe((todo) => console.log(myTodo));
  }

  onDelete(myTodo) {
    console.log('delete');
  }
}
