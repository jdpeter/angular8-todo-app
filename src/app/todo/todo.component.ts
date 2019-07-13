import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoText: string = "";
  todoList = [];

  constructor() { }

  ngOnInit() {

  }

  onAddTodoText() {
    console.log("adding the todoText - ", this.todoText);
    this.todoList.push(this.todoText);
    this.todoText = "";
  }
}
