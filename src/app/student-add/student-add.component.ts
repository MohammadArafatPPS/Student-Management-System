import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
@Component
(
  {
    selector: 'app-student-add',
    templateUrl: './student-add.component.html',
    styleUrls: ['./student-add.component.css']
  }
)
export class StudentAddComponent 
{
  //  Initialized with a new Student object that has empty fields. 
  newStudent : Student = new Student(0, '', '', '', '', '', '');
  constructor(private studentService: StudentService) 
  {
  }
  // Add the newStudent to list of students use the studentService then  reset the newStudent object to an empty state by creating a new Student object with empty fields. 
  onSubmit () 
  {
    this.studentService.addStudent(this.newStudent);
    this.newStudent = new Student(0, '', '', '', '', '', '');
  }
}