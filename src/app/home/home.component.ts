import { Component, OnInit } from '@angular/core';
import { SwipeGestureEventData } from '@nativescript/core';

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
    this.tasks.push({ task: this.newtask, isComplete: false, isDeleted: false } );
  }

  markComplete(index){
    console.log(index);
    this.tasks[index].isComplete = !this.tasks[index].isComplete;
    console.log(this.tasks)
  }

  deleteTask(args: SwipeGestureEventData , index){
    if(args.direction === 2){
      this.tasks[index].isDeleted = true;
      setTimeout(() => {
        this.tasks.splice(index, 1);
      }, 500);

    }
  }

  ngOnInit(): void {

  }
}
