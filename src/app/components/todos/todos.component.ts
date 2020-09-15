import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // Todo is a type we made, like string or number.
  todos: Todo[];

  // todoService is accessible from anywhere in the class
  constructor(private todoService: TodoService) {}

  // todoService holds data for each todo component.
  // Here, we tell todoService to make API call to get data.
  // We use an observable (which is like a promise), to assign that data to our local todos variable once the API call is finished.
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  // todos.filter() loops through every value in todos array, finds the index of the value passed in params,
  // and removes it from the array. When html renders the page using this array, it will be gone, thus it's deleted.
  deleteTodo(myTodo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== myTodo.id); // remove on client
    this.todoService.deleteTodo(myTodo).subscribe(); // remove on server
  }
}
