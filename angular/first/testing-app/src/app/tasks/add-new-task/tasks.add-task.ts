import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'add-task-modal',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './tasks.add-task.html',
  styleUrl: './tasks.add-task.css'
})
export class addTaskModal {
 
  enteredTitle = ""
  enteredSummary = ""
  enteredDate = ""
  @Input({required:true}) selectedUser !: string 

  @Output() cancel = new EventEmitter()

  closeAddingTaskModal(){
    console.log("closing")
    this.cancel.emit(); 
  }

  addNewTask(){
    console.log("add task to the user file")
  }

}
