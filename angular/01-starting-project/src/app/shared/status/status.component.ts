import { Component, Input } from "@angular/core";

@Component({
    selector:"app-status",
    standalone:true,
    templateUrl:"./status.component.html"
})
export class Status{
 @Input({required:true}) currentStatus !:string

}