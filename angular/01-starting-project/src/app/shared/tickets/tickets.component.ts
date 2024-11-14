import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { traffic } from "../traffic/traffic.model";
@Component({
    selector:"app-tickets",
    standalone:true,
    templateUrl:"./tickets.component.html"
})
export class Tickets{
    @Input({required:true}) dummyTrafficData !: traffic[]  
    @Input({required:true}) maxTraffic !: number 

}