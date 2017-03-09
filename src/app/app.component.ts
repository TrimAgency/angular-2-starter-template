import { Component } from '@angular/core';
import { API_URL } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Welcome to the Trim Angular 2 starter template';
  }
}
