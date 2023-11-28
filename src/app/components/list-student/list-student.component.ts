import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../../services/students.service';
import { Students } from '../../shared/types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [StudentsService],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css',
})
export class ListStudentComponent {
  studentData: Students[] = [];
  constructor(private student: StudentsService) {}

  ngOnInit(): void {
    this.student.getStudents().subscribe((data: Students[]) => {
      this.studentData = data;
    });
  }

  deleteStudent(id: number) {
    this.student.deleteStudent(id).subscribe((result) => {
      this.studentData = this.studentData.filter((item) => item.id !== id);
    });
  }
}
