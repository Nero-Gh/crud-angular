import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Students } from '../../shared/types';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  providers: [StudentsService],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent {
  editStudent!: FormGroup;
  message: boolean = false;

  //The ActivatedRoute is a service that is used to get the current route.
  id = this.router.snapshot.paramMap.get('id');

  constructor(
    private students: StudentsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.editStudent = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });

    //this.students.getStudentById() is a method that is called when the component is initialized.
    this.students
      .getStudentById(this.id ? parseInt(this.id) : 0)
      .subscribe((result: Students) => {
        this.editStudent = new FormGroup({
          name: new FormControl(result.name, Validators.required),
          email: new FormControl(result.email, Validators.required),
        });
      });
  }

  //handlesubmit() is a method that is called when the form is submitted.
  handleSubmit() {
    let studentId = this.id ? parseInt(this.id) : 0;
    this.students
      .updateStudent(studentId, this.editStudent.value)
      .subscribe((result) => {
        this.message = true;
        this.editStudent.reset('');
      });
  }

  removeMessage() {
    this.message = false;
  }
}
