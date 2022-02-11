import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Developer} from "../models/developer.model";
const baseUrl = 'http://localhost:8080/developers';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Developer[]> {
    return this.http.get<Developer[]>(baseUrl);
  }
}
