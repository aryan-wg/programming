import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: '[test]',
  templateUrl: './test.component.html',
  standalone:true,
//   required:[ngContent]
})
export class TestComponent implements OnInit,AfterViewInit  {
  name = 'Angular';
  ngOnInit(): void {
    console.log("running ngOnInit")
  }
  ngAfterViewInit(): void {
    console.log("view has been initialized")
  }
}