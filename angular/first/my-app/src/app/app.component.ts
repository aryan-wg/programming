import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  users = DUMMY_USERS

  eventHandler(id:string){
    for(let task of this.tasks){
      task.uid = id
    }
  }

  tasks = [{task:'task1',uid:"u1"},{task:'task2',uid:"u1"},{task:'task3',uid:"u1"}]
}
