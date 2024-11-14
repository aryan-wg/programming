import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksContainerComponent } from "./tasks/tasks-container/tasks-container.component";
import { Task } from '../types/Tasks';
import { addTaskModal } from './tasks/add-new-task/tasks.add-task';
const TASKS = [{task:'task1',uid:"u1"},{task:'task2',uid:"u1"},{task:'task3',uid:"u1"}] 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, TasksContainerComponent,addTaskModal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'my-app';
  users = DUMMY_USERS
  selectedUser = this.users[0].id  
  tasks = TASKS 

  isAddingTask = false

  openAddingTaskModal(){
    this.isAddingTask = true
  }

  closeAddingTaskModal(){
    console.log("reached the app component close")
    this.isAddingTask = false 
  }

  addTask(task:Task|null){
    console.log("Adding a new task to "+this.selectedUser)
    this.closeAddingTaskModal()
  }


  eventHandler(id:string){
    this.tasks = TASKS
    this.selectedUser = id 
    this.tasks = this.tasks.filter((task)=>task.uid === id)  
  }

}
