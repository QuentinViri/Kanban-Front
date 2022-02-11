import { Component, OnInit } from '@angular/core';
import {Developer} from "../models/developer.model";
import {DeveloperService} from "../services/developer.service";

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent implements OnInit {

  developers?: Developer[];

  constructor(private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.retrieveDevelopers();
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

}
