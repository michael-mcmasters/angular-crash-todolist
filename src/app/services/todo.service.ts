import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

// The type of data we are passing to the API. Letting it know it will be in json format.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applications/json',
  }),
};

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

  // Get Todos
  // This function makes an API call to the given URL.
  // Returns an array of type: Todo. (notice our Todo class has the exact same property names as the objects that the API is returning.)
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Delete Todo
  // Add /myTodo.id to the end of the url to specify which property to delete. Then pass that url.
  // You can see how this works by going to https://jsonplaceholder.typicode.com/todos/2, which only shows one property with the id: 2.
  deleteTodo(myTodo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${myTodo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, newTodo, httpOptions);
  }

  // Toggle Completed
  // We use Observable<any> instead of Observable<Todo> because the API has a 4th property called userID but ours only has 3 properties. So they're not exact.
  toggleCompleted(myTodo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${myTodo.id}`;
    return this.http.put(url, myTodo, httpOptions);
  }
}

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
