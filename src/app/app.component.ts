import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;

  constructor( public titleService: Title) {}

  ngOnInit () {
    this.title = 'Welcome to the Trim Angular 2 starter template';
    this.titleService.setTitle(this.title);
  }

}
