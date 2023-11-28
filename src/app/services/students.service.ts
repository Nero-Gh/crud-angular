import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostStudents, Students } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  url: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Students[]>(this.url);
  }

  saveStudent(student: Students) {
    return this.http.post(this.url, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getStudentById(id: number) {
    return this.http.get<Students>(`${this.url}/${id}`);
  }

  updateStudent(id: number, student: Students) {
    return this.http.put(`${this.url}/${id}`, student);
  }
}
