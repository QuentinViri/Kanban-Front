import { Component, OnInit } from '@angular/core';
import {TaskService} from "../services/task.service";
import {DeveloperService} from "../services/developer.service";
import {TasktypeService} from "../services/tasktype.service";
import {Developer} from "../models/developer.model";
import {Task} from "../models/task.model";
import {Taskstatus} from "../models/taskstatus.model";
import {Taskstype} from "../models/taskstype.model";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task : Task = {};
  developers?: Developer[];
  taskstatus : Taskstatus = {};
  tasktypes?: Taskstype[];

  selectedDeveloper?: Developer = {};
  selectedType?: Taskstype = {};

  constructor(private developerService : DeveloperService,
              private taskService: TaskService,
              private tasktypeService : TasktypeService) { }

  ngOnInit(): void {
    this.retrieveTaskTypes();
    this.retrieveDevelopers();
  }
  retrieveTaskTypes() : void {
    this.tasktypeService.getAll()
      .subscribe(
        data => {
          this.tasktypes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveDevelopers() : void {
    this.developerService.getAll()
      .subscribe(
        data => {
          this.developers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveTask(): void {
    const data = {
      title: this.task.title,
      nbHoursForecast: this.task.nbHoursForecast,
      nbHoursReal: this.task.nbHoursReal,
      tasktype: this.selectedType,
      developers: [this.selectedDeveloper],
    };
    console.log(data);

    this.taskService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }


}
