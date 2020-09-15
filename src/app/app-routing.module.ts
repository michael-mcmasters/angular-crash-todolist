import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import the components you want to add routing to
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';

// Add it here also.
const routes: Routes = [
  // path: '' is our home page
  { path: '', component: TodosComponent },
  // path: 'about' means this component will show up if we type yourwebsite.com/about
  { path: 'about', component: AboutComponent },
];

// Now that we have routing. We can use it with <router-outlet></router-outlet> in app.component.html

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
