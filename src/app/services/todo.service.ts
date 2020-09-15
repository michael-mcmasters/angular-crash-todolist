import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
// This class is a service that holds data for each todo component. It gets its data by making an API call.
export class TodoService {
  // The API URL we are getting data from.
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  // We add this to the end of the URL so that the API only returns 5 items instead of dozens.
  todosLimit = '?_limit=5';

  // By grabbing HttpClient in this constructor, http is now accessible from anywhere in the class.
  constructor(private http: HttpClient) {}

  // Function makes API call to the given URL.
  // Returns an array of type: Todo. (notice our Todo class has the exact same property names as the objects that the API is returning.)
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);

    // This is what our dummy data looked like before we switched to getting data from the API.
    // return [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: true,
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true,
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: false,
    //   },
    // ];
  }
}
