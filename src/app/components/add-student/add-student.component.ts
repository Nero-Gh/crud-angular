import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [StudentsService],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  addStudent!: FormGroup;
  message: boolean = false;
  constructor(private students: StudentsService) {}

  ngOnInit(): void {
    this.addStudent = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  get name() {
    return this.addStudent.get('name' ?? '');
  }

  get email() {
    return this.addStudent.get('email' ?? '');
  }

  removeMessage() {
    this.message = false;
  }

  handleSubmit() {
    if (this.addStudent.valid) {
      this.students.saveStudent(this.addStudent.value).subscribe(
        (result) => {
          this.message = true;
          this.addStudent.reset();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
