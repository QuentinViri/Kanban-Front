import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Taskstype} from "../models/taskstype.model";
const baseUrl = 'http://localhost:8080/task_types';

@Injectable({
  providedIn: 'root'
})
export class TasktypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Taskstype[]> {
    return this.http.get<Taskstype[]>(baseUrl);
  }
}
