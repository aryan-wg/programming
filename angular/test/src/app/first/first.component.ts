import { Component, ElementRef, inject } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  first_element = inject(ElementRef)
  clickHandler(){
    console.log("clicked")
    console.log(this.first_element)
    console.log(this.first_element?.nativeElement.children[0].firstChild.nextSibling.children)
    // this.first_element.nativeElement.innerHTML = "<div> this is something</div>"
    this.first_element.nativeElement.children[0].firstChild.nextSibling.children[0].innerHTML = "<span> this is a span now </span>"
  }
}
