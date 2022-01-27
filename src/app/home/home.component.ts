import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css']
})
export class HomeComponent implements OnInit{

  text = "ToDo List";
  newtask = "";

  tasks = [];

  addTask(){
    this.tasks.push({ task: this.newtask, isComplete: false } );
  }

  markComplete(index){
    console.log(index);
    this.tasks[index].isComplete = !this.tasks[index].isComplete;
    console.log(this.tasks)
  }

  ngOnInit(): void {

  }
}
