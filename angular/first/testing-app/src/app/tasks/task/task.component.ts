import { Component, Input } from '@angular/core';
import {Task} from "../../../types/Tasks"
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task !:Task
}
