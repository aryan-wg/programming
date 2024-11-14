import { Component } from '@angular/core';
import { FormComponent } from './shared/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[FormComponent]
})
export class AppComponent {}
