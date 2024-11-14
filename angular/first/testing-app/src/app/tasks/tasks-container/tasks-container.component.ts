import { Component, EventEmitter, Input, Output } from '@angular/core';
import  {TaskComponent}  from '../task/task.component';
import { Task } from '../../../types/Tasks';

@Component({
  selector: 'tasks-container',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks-container.component.html',
  styleUrl: './tasks-container.component.css'
})
export class TasksContainerComponent {
  @Input({required:true}) tasks!:Task[]
  @Output() add = new EventEmitter<void>()

  openAddingTaskModal(){
    this.add.emit(); 
  }
}
