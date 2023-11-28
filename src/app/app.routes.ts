import { Routes } from '@angular/router';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddStudentComponent,
  },
  {
    path: 'list',
    component: ListStudentComponent,
  },
  {
    path: 'list/edit/:id',
    component: EditStudentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
];
