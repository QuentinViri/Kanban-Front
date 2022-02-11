import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Taskstatus} from "../models/taskstatus.model";
const baseUrl = 'http://localhost:8080/task_status';

@Injectable({
  providedIn: 'root'
})
export class TaskstatusService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Taskstatus[]> {
    return this.http.get<Taskstatus[]>(baseUrl);
  }
}
