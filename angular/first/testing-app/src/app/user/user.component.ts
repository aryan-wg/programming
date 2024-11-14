import { Component,Input,Output,input, computed, signal, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';
const random_index = Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string
  @Input({required:true}) avatar!: String
  @Input({required:true}) name!: String

  @Output() select = new EventEmitter()

  // avatar = input.required<string>()
  // name = input.required<string>()

  imagePath = computed(()=>{
    return 'assets/users/' + this.avatar;
  })
  
  onSelectUser() {
    this.select.emit(this.id)
  }

  // get imagePath(){
  //   return 'assets/users/' + this.avatar;
  // }

  // user = signal(DUMMY_USERS[random_index])
  // imagePath = computed(()=>"assets/users/" + this.user().avatar)
}
