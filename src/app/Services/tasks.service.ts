import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../Models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private baseUrl = 'http://localhost:8080/items';
  constructor(private http: HttpClient) { }

  getTask(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTask(task: Task): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, task);
  }

  updateTask(id: number, task: Task): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getToDoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
