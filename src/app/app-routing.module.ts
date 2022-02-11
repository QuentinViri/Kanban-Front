import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DevelopersListComponent} from "./developers-list/developers-list.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {KanbanComponent} from "./kanban/kanban.component";

const routes: Routes = [
  {
    path:'developer',component:DevelopersListComponent
  },
  {
    path:'add-task',component:AddTaskComponent
  },
  {
    path:'kanban',component:KanbanComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
